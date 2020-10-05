document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("btn-open-whats").addEventListener("click", function() {
    var countryCode = document.getElementById("country_code").value.replace(/[^0-9]/g, ""),
		whatsappNumber = document.getElementById("whats_number").value.replace(/[^0-9]/g, "");
	chrome.tabs.create({url:"https://web.whatsapp.com/send?phone=" + countryCode + whatsappNumber + "&text=Ol%C3%A1&app_absent=0?text=Ol%C3%A1"});
  });
});
