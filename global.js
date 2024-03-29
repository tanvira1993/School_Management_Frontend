export const base_url = "http://127.0.0.1:8000/"    // development server
// export const base_url = "127.0.0.1:8000/"  // staging server

// sweet-alert function 
 export const sweetAlert = function(title,body){
	swal({
		title: title,
		text: body,
		html:true,
		type: 'error'
	});
}

export const toasterInfo = function (title,msg){
	iziToast.info({    title: title,    message: msg, }); 
}


export const toasterSuccess = function (title,msg){
	iziToast.success({    title: title,    message: msg, }); 
}

export const toasterError = function (title,msg){
	iziToast.error({    title: title,    message: msg, }); 
}

export const toasterWarning = function (title,msg){
	iziToast.warning({    title: title,    message: msg, }); 
}

 
export const headerConfig = function()  {
  const data = {
    headers: {
      Authorization: localStorage.getItem("token"),
      /*organization_id: localStorage.getItem("organization_id"),
      branch_id: localStorage.getItem("branch_id"),
      role: localStorage.getItem("role"),*/
      user_id: localStorage.getItem("idUser"),
      /*device_location_id: localStorage.getItem("device_location_id"),*/
    },
  };
  return data;
};