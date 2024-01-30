// HOW TO UPLOAD NEW BLOG FROM DASHBOARD
const datatextinput = document.getElementById("CK1");
const button = document.getElementById("submitt-blog");
window.onload = () => {
  CKEDITOR.replace("editor1");
};

button.addEventListener("click", function (e) {
  console.log(CKEDITOR);
  var editorContent = CKEDITOR.instances.editor1.getData();
  console.log(editorContent);
});
