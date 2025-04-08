function getFormvalue(event) {
	event.preventDefault();
  let form=document.getElementById("form1");

	let firstname=form.elements["fname"].value;
	let lastname=form.elements["lname"].value;

	alert(`${firstname}-${lastname}`);
	
}
