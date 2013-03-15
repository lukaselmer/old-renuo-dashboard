$(function () {
    var links = {
        "Renuo":"redmine.renuo.ch",
        "Shariando":"redmine.renuo.ch/projects/shariando/issues",
        "Studentbooks":"redmine-studentbooks.renuo.ch",
        "JIRA":"renuogmbh.atlassian.net"
    };

    $.each(links, function (name, href) {
        var link = $("<a></a>");
        link.attr("href", "https://" + href);
        link.text(name);
        $("#redmine").append($("<li></li>").append(link));
    });
});
