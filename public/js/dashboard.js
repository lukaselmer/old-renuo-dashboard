$(function () {
    var fillList = function(id, list){
        $.each(list, function (name, href) {
            var link = $("<a></a>");
            if (href.indexOf("://") == -1) href = "https://" + href;
            link.attr("href", href);
            link.text(name);
            $("#" + id).append($("<li></li>").append(link));
        });
    };

    fillList("redmine", {
        "Renuo":"redmine.renuo.ch",
        "My Tickets":"redmine.renuo.ch/issues?query_id=14",
        "Studentbooks":"redmine-studentbooks.renuo.ch",
    });

    fillList("meetings", {
        "Sitzungsprotokoll": "docs.google.com/a/renuo.ch/document/d/1Ktr9rWkbVlIDZsDFRlrYp3_gmiikf5n0Z-OROa7bkgI/edit",
        "Redmine Stunden": "redmine.renuo.ch/time_entries/report?utf8=%E2%9C%93&criteria%5B%5D=project&criteria%5B%5D=user&criteria%5B%5D=issue&f%5B%5D=spent_on&op%5Bspent_on%5D=%3E%3Ct-&v%5Bspent_on%5D%5B%5D=7&f%5B%5D=&c%5B%5D=project&c%5B%5D=spent_on&c%5B%5D=user&c%5B%5D=activity&c%5B%5D=issue&c%5B%5D=comments&c%5B%5D=hours&columns=week",
        "Float": "renuo.floatschedule.com"
    });
    
    fillList("hotfeet", {
        "Wiki": "redmine.renuo.ch/projects/internal/wiki/HotFeet",
        "Jira": "jira.hotfeet.ch",
        "Ldap": "ldap.hotfeet.ch",
        "Ldap Doku": "docs.google.com/presentation/d/1_WY3MeUFXCbjbiE4d84MyjddFq6qRfpdJZXBYztWTJE/edit#slide=id.p",
        "Git": "git.hotfeet.ch",
        "SSH Development": "ssh://devel.hotfeet.ch",
    });
});
