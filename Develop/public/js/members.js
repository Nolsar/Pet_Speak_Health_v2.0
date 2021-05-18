

$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
  // Getting references to our form and input
  var searchForm = $("form.search");
  var search1form = $("form.sndsearch");
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var newpetForm = $("form.new-pet");
  var newrecordForm = $("form.new-record");

  var addRecordBlock = $("#add-record");
  var addPetBlock = $("#add-pet");

  addPetBlock.hide();
  addRecordBlock.hide();

  var fname = $("#firstname");
  var lname = $("#lastname");
  var add = $("#address");
  var cty = $("#city");
  var zcode = $("#zipcode");
  var st = $("#state");
  var cphone = $("#cell-phone");
  var wphone = $("#work-phone");
  var hphone = $("#house-phone");

  var searchName = $("#search-name");
  var searchfirstname = $("#search-fname");

  var selectedClient = '';

  function showAddRecord(){
    addPetBlock.hide();
    addRecordBlock.show();
    $('html, body').animate({
      scrollTop: addRecordBlock.offset().mid
  }, 2000);
  }

  function showAddPet(){
    addPetBlock.show();
    addRecordBlock.hide();
  }

  function showClientList(clientArray){
    var clientList = "<div>";
    console.log(clientArray);
    for(var i = 0; i<clientArray.length; i++){
      console.log(i);
      clientList = clientList + '<div style="margin: 15px; padding:15px; border:1px solid grey; border-radius:5px" class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+clientArray[i].first_name+' '+clientArray[i].last_name+'</h5> <p class="card-text">'+clientArray[i].email+' '+clientArray[i].cell_phone+'</p><span class="btn btn-primary add-pet" data-id="'+clientArray[i].id+'">Add Pet</span><span class="btn btn-primary view-pet" data-id="'+clientArray[i].id+'">View Pets</span></div> </div>'
    }
    clientList = clientList + "</div>";
    $("#searchresult").html(clientList)
  }

  $(document).on("click", ".add-pet", function(event){
    selectedClient = $(this).data("id");
    showAddPet();
  });

  $(document).on("click", ".view-pet", function(event){
    var id = $(this).data("id");
    var route = "/api/pet_data/"+ id;
    var r = "/api/client_data/"+ id;
    console.log(route);
    $.get(r)
    .then(function(info){
      console.log(info);
      $.get(route)
      .then(function(data){
        console.log(data);
        showPetsList(data, info)
      });
    });
  });
  

  $(document).on("click", ".add-record", function(event){
    selectedClient = $(this).data("id");
    showAddRecord();
  });

  function showPetsList(list, info){
    console.log('here::::', list);
    var petContainer = '<div style="margin:15px"><span>';
    console.log(info);
    petContainer = petContainer + '<h4 style="margin: 15px">'+info.first_name+' ' + info.last_name + '</h4>'
    petContainer = petContainer + '<span>'+info.address+', </span>'
    petContainer = petContainer + '<span>'+info.city+', </span>'
    petContainer = petContainer + '<span>'+info.state+', </span>'
    petContainer = petContainer + '<span>'+info.zipcode+'</span>'
    petContainer = petContainer + '<span style="margin: 15px">'+info.email+'</span>'
    petContainer = petContainer + '<span style="margin: 15px">cell phone: '+info.cell_phone+'</span>'
    petContainer = petContainer + '<span style="margin: 15px">work phone: '+info.work_phone+'</span>'
    petContainer = petContainer + '<span style="margin: 15px">house phone: '+info.house_phone+'</span>'
    petContainer = petContainer + '</span>'
    console.log(list);
    for(var i = 0; i<list.length; i++){
      petContainer = petContainer + '<div style="margin: 15px; padding:15px; border:1px solid grey; border-radius:5px"><div class="card" style="width: 80vw;"><div class="card-body"><h2 class="card-title">'+list[i].name+' ('+list[i].breed+')</h2> <div class="card-text"> <span style="margin:15px"> Color: '+list[i].color+'</span> <span style="margin:15px">Birthdate: '+list[i].birthdate+'</span></div><span class="btn btn-primary add-record" data-id="'+list[i].id+'">Add Records</span></div> </div>'
      petContainer = petContainer +'<h4>Records</h4>';
      for(var j = 0; j<list[i].records.length; j++){
        petContainer = petContainer + '<hr ><div style="margin:15px"><div class="card-body"><div class="card-title"><span style="margin:15px">Exam: '+list[i].records[j].physical_exam+'</span><span style="margin:15px"> Vaccine: '+list[i].records[j].vaccine_records+'</span></div> <div class="card-text"> <span style="margin:15px"> Medication: '+list[i].records[j].medication_list+'</span></div></div> </div><hr >'
      }
      petContainer = petContainer + '</div>'
    }
    petContainer = petContainer + "</div>";
    $("#searchresult").empty();
    console.log(petContainer);
    $("#searchresult").html(petContainer)
  }

  // $(document).on("click", ".view-pet", function(event){
  //   var id = $(this).data("id");
  //   selectedClient = $(this).data("member");
  //   console.log('selectedClient: ', selectedClient);
  //   var route = "/api/pet_data/"+ id;
  //   console.log(route);
  //   $.get(route)
  //   .then(function(data){
  //     console.log(data);
  //   })
  // });

  search1form.on("submit", function(event){
    event.preventDefault();
    var route = "/api/search-firstname/client/" + searchfirstname.val().trim();
    $.get(route)
      .then(function(data) {
        console.log(data);
        showClientList(data);
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  })

  newrecordForm.on("submit", function(event){
    event.preventDefault();
    console.log(" $('#vaccine_records').val().trim(): ",  $('#vaccine_records').val().trim())
    var dt = {
      medication_list: $('#medication_list').val().trim(),
      physical_exam: $('#physical_exam').val().trim(),
      vaccine_records: $('#vaccine_records').val().trim(),
      client_education: $('#client_education').val().trim(),
      pet_id: selectedClient
    }
    var route = "/api/new_medical_record";
    $.post(route, dt)
      .then(function(data) {
        console.log(data);
        window.location.reload();
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  })

  newpetForm.on("submit", function(event){
    event.preventDefault();
    var dt = {
      name: $('#pet-name').val().trim(),
      animal_type: $('#animal_type').val().trim(),
      birthdate: $('#birthdate').val().trim(),
      breed: $('#breed').val().trim(),
      color: $('#color').val().trim(),
      client_id: selectedClient
    }
    var route = "/api/new_pet";
    $.post(route, dt)
      .then(function(data) {
        console.log(data);
        window.location.reload();
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  })

  searchForm.on("submit", function(event){
    event.preventDefault();
    var route = "/api/search-lastname/client/" + searchName.val().trim();
    $.get(route)
      .then(function(data) {
        console.log(data);
        showClientList(data);
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  })
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      first_name: fname.val().trim(),
      last_name: lname.val().trim(),
      address: add.val().trim(),
      city: cty.val().trim(),
      state: st.val().trim(),
      zipcode: zcode.val().trim(),
      cell_phone: cphone.val().trim(),
      work_phone: wphone.val().trim(),
      house_phone: hphone.val().trim(),
    };

    if (!userData.email) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser();
    // emailInput.val("");
    // passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser() {
    var userData = {
      email: emailInput.val().trim(),
      first_name: fname.val().trim(),
      last_name: lname.val().trim(),
      address: add.val().trim(),
      city: cty.val().trim(),
      state: st.val().trim(),
      zipcode: zcode.val().trim(),
      cell_phone: cphone.val().trim(),
      work_phone: wphone.val().trim(),
      house_phone: hphone.val().trim(),
    };
    $.post("/api/new_members", userData)
      .then(function(data) {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});