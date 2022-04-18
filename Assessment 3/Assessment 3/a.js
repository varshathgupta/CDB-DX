$(document).ready(function($)
{

  var ajax_data =
    [
       {Name: "Lionel Messi" , ID: "12345" , Skills: "HTML" , Project: "Webpage" , HCM: "NA"},
       {Name: "Christiano Ronaldo" , ID: "12346" , Skills: "HTML" , Project: "Webpage" , HCM: "NA"},
       {Name: "Serigo Ramos" , ID: "12347" , Skills: "HTML" , Project: "Webpage" , HCM: "NA"},
       {Name: "Neymar Jr" , ID: "12348" , Skills: "HTML" , Project: "Webpage" , HCM: "NA"},
       {Name: "David Beckham" , ID: "12349" , Skills: "HTML" , Project: "Webpage" , HCM: "NA"},
       {Name: "Maradona" , ID: "12350" , Skills: "HTML" , Project: "Webpage" , HCM: "NA"},
       {Name: "Zlatan Ibrahimovic" , ID: "12351" , Skills: "HTML" , Project: "Webpage" , HCM: "NA"},
       {Name: "Rooney" , ID: "12352" , Skills: "HTML" , Project: "Webpage" , HCM: "NA"},
       {Name: "Pele" , ID: "12353" , Skills: "HTML" , Project: "Webpage" , HCM: "NA"},
       {Name: "Sunil Chetri" , ID: "12354" , Skills: "HTML" , Project: "Webpage" , HCM: "NA"},
    ]


var random_id = function  ()
{
     var id_num = Math.random().toString(9).substr(2,3);
     var id_str = Math.random().toString(36).substr(2);

     return id_num + id_str;
}



  var tbl = '';
  tbl += '<table class="table table-hover">'
    
    
    tbl += '<thead>';
        tbl += '<tr>';
        tbl +=  '<th>Name</th>';
        tbl +=  '<th>ID</th>'; 
        tbl +=  '<th>Skills</th>'; 
        tbl +=  '<th>Project</th>';
        tbl +=  '<th>HCM</th>';
        tbl +=  '<th></th>';
        tbl +=  '</tr>';   
    tbl += '</thead>';
 
    tbl +='<tbody>';
    
    
$.each(ajax_data, function(index, val)
{
   
var row_id = random_id();


tbl += '<tr row_id="'+row_id+'">';
    tbl += '<td> <div class="row_data" edit_type="click" col_name="fname">'+ val['Name']+'</div></td>';
    tbl += '<td> <div class="row_data" edit_type="click" col_name="ID">'+ val['ID']+'</div></td>';
    tbl += '<td> <div class="row_data" edit_type="click" col_name="Skills">'+ val['Skills']+'</div></td>';
    tbl += '<td> <div class="row_data" edit_type="click" col_name="Project">'+ val['Project']+'</div></td>';
    tbl += '<td> <div class="row_data" edit_type="click" col_name="HCM">'+ val['HCM']+'</div></td>';

    
   tbl += '<td>';
    tbl += '<span class="btn_edit">  <a href="#" class="btn btn-link" row_id=" '+row_id+'" >Edit</a> </span>';


    
    tbl += '<span class ="btn_save"> <a href="#" class="btn btn-link" row_id=" '+row_id+' "> Save </a>  | </span>';
    tbl += '<span class ="btn_cancel"> <a href="#" class="btn btn-link" row_id=" '+row_id+'"> Cancel </a>  | </span>';

  tbl += '</td>';


tbl += '</tr>';
});



tbl += '</tbody>';


tbl += '</table>'
   

    
    $(document).find('.tbl_user_data1').html(tbl);

    $(document).find('.btn_save').hide();
    $(document).find('.btn_cancel').hide();


    
    $(document).on('click', '.row_data', function(event)
    {
      event.preventDefault();

      if($(this).attr('edit_type')=='button')
      {
          return false;
      } 

   
    $(this).closest('div').attr('contenteditable','true');
    
    $(this).addClass('bg-warning').css('padding','5px');

    $(this).focus();
    })
    
    $(document).on('focusout', '.row_data', function(event)
    {
        event.preventDefault();

        if($(this).attr('edit_type')=='button')
        {
            return false;
        }

        var row_id = $(this).closest('tr').attr('row_id');

        var row_div = $(this)
        .removeClass('bg-warning')  //add bg css
        .css('padding', '')

    })

    $(document).on('click','.btn_edit', function(event)
    {
      event.preventDefault();
      var tbl_row = $(this).closest('tr');

      var row_id = tbl_row.attr('row_id');

      tbl_row.find('.btn_save').show();
      tbl_row.find('.btn_cancel').show();

    
    tbl_row.find('.btn_edit').hide();

    
    tbl_row.find('.row_data')
    .attr('contenteditalbe','true')
    .attr('edit_type','button')
    .addClass('bg-warning')
    .css('padding','3px')
    
    
    tbl_row.find('.row_data').each(function(index,val)
    {
         
        $(this).attr('original_entry',$(this).html());
    });
    

});
   


   
    $(document).on('click', '.btn_cancel', function(event)
    {
        event.preventDefault();

        var tbl_row =$(this).closest('tr');

        var row_id = tbl_row.attr('row_id');

       
        tbl_row.find('.btn_save').hide();
        tbl_row.find('.btn_cancel').hide();

        
        tbl_row.find('.btn_edit').show();

        
        tbl_row.find('.row_data')
        .attr('edit_type','click')
        .removeClass('bg-warning')
        .css('padding','')

        tbl_row.find('.row_data').each(function(index,val)
        {
            $(this).html( $(this).attr('original_entry') );
        });
    });
   


    
    $(document).on('click','.btn_save', function(event)
    {
        event.preventDefault();
        var tbl_row = $(this).closest('tr');

        var row_id = tbl_row.attr('row_id');


        tbl_row.find('.btn_save').hide();
        tbl_row.find('.btn_cancel').hide();

       
        tbl_row.find('.btn_edit').show();


       
        tbl_row.find('.row_data')
        .attr('edit_type','click')
        .removeClass('bg-warning')
        .css('padding','')

    });



});