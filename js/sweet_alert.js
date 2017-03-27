angular.module("SweetAlerts", [])
	.factory("Alerts", function(){
		Alerts = {
			sweet_success: function(type, price){
				swal({
				  title: type + " Enquiry!",
				  text:  "Do you want to continue with the enquiry to become a " + type + " member of Castlebar Hockey Club? \n Annual membership will cost you £" + price + ".",
				  type:  "success",
				  showCancelButton: true,
				  confirmButtonColor: "#808080",
				  confirmButtonText: "Send Enquiry!",
				  closeOnConfirm: false,
				  closeOnCancel: false
				},
				function(isConfirm){
					if(isConfirm){
						swal({
							title: "Good job!",
							text: "Your Enquiry has been sent.", 
							type: "success",
							confirmButtonColor: "#808080"
						})
					} else {
						swal({
							title: "Cancelled", 
							text: "Your Enquiry has not been sent.",
							type:  "success",
							confirmButtonColor: "#808080"
						});
					}
				});
			},

			sweet_error: function(){
				swal({
				    title: "Error!",
				    text: "Here's my error message!",
				    type: "error",
				    confirmButtonText: "Bummer"
				});
			}
		};

		return Alerts;
	});