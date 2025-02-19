$(document).ready(function () {

    $(document).on("click", ".showInfoLink", function() {
        let data = $(this).data();
        let page = $($("#showMemberInfo")[0]);

        page.find("#member-image").attr("src", data.image);
        page.find("#member-name").text(data.name);
        page.find("#member-gender").text(data.gender);
        page.find("#member-age").text(data.age);
        page.find("#member-mbti").text(data.mbti);
        page.find("#member-hobby").text(data.hobby);
        page.find("#member-git").attr("href", data.git);
        page.find("#member-blog").attr("href", data.blog);
        page.find("#member-message").text(data.message);
        page.find("#member-index").text(data.index);
        page.find("#member-date").text(data.date);

    });

});