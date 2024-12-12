$(function(){
    function countGrade() {
        const gradeLength = $(".grade").lenght;
      }
    $("#addGrade").click(function(){
        const gradeLength = $(".grade").lenght;
        const addGrade =`<div class="row mt-3 pb-3 border-bottom grade">
                            <label for="" class="col-2 text-center grade">${gradeLength}</label>
                            <input type="text" class="form-control col-9" name="grade-${gradeLength}" value="특별회원">
                          </div> `
                          ;
        $("gradeForm").append(addGrade);
    });

    $("#deleteGrade").click(function(){
        const gradeLength = $(".grade").lenght;
        if(gradeLength > 1) {
            $(".modal-body form .grade").last().remove();
        }
    });
});