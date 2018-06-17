
var regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
var regexPhone = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
var regexName = /^([A-Za-z0-9]){4,20}$/gm;

$(function () {
  $('[data-toggle="popover"]').popover();
})
$('.main-container input[type=text]').focusout(function(event) {
	if($(this).val() == ""){
		$(this).css('border', '2px solid #e74c3c');
	}else{
		$(this).css('border', '1px solid grey');
	}	
});
function checkFirstInput(){
	if($('.email-log-in').val().match(regexEmail) || $('.email-log-in').val().match(regexPhone)){
		return true;
	}else {
		return false;
	}
}
function checkLastInput(){
	if($('.password-log-in').val().match(regexPassword)){
		return true;
	}else {
		return false;
	}
}

$('.logIn').submit(function(event) {
	/* Act on the event */
	if (checkFirstInput() && checkLastInput()) {
		
	}else{
		clearFirst();
	}
	
	event.preventDefault();
});

$('.signUp').submit(function(event) {
	/* Act on the event */
	if(checkName() && checkSurName() && checkNumber() && checkPass() && checkBday()){

	}else{
		clearSecond();
	}
	// console.log($('.bday').val() == "");
	event.preventDefault();
});

$('.bday').change(function(){
	$('.bday').css('border', '1px solid grey');
})

function checkBday(){
	if($('.bday').val() == ""){
		$('.bday').css('border', '2px solid #e74c3c');
		return true;
	}else {
		return false;
	}
}
function clearFirst(){
	$('.email-log-in').val("");
	$('.password-log-in').val("")
}

function checkName(){
	if($('.first-name').val().match(regexName)){
		return true;
	}else {
		return false;
	}
}
function checkSurName(){
	if($('.surname').val().match(regexName)){
		return true;
	}else {
		return false;
	}
}
function checkNumber(){
	if($('.mobile-number').val().match(regexEmail) || $('.mobile-number').val().match(regexPhone)){
		return true;
	}else {
		return false;
	}
}
function checkPass(){
	if($('.password').val().match(regexPassword)){
		return true;
	}else {
		return false;
	}
}
function clearSecond(){
	$('.password').val("");
	$('.mobile-number').val("");
	$('.first-name').val("");
	$('.surname').val("");
	$('.main-container input[type=text]').css('border', '1px solid grey');
}