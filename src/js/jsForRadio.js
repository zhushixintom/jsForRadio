function radioGroup(radioName) {
  $("[name='"+ radioName +"']").on("click",function(){
    var $this = $(this);
    var $thisChecked = $(this).attr("thisChecked");
    // console.log($thisChecked);
    if($thisChecked === 'yes'){
      $this.removeAttr('checked').attr({"thisChecked":"no"});
    }else{
      $this.attr({"thisChecked":"yes"});
      $("[name='"+ radioName +"']").not($this).attr({"thisChecked":"no"});
    }
  })
}