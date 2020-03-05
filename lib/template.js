var template = {
    HTML: function (title, list, body, control, authStatusUI='<a href="/auth/login">login</a> | <a href="/auth/register">Register</a>'){
        return `
        <!doctype html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title> KFriends ${title}</title>
                    <link rel="stylesheet" href="/css/style.css">
                </head>
                <body>
            
                    <div class="container">
                    <header>
                        <h1><a href="/">My KpopFriends</a></h1>
                        <div class="register">
            
            
                        ${authStatusUI}
            
            
                        </div>
                    </header>
                    <section class="content">
                        <nav>
                        <ul>
                            <a href="kpfr.html" class="button-link"><strong>Search<br> Kpop-penpals</strong></a><br><br>
                            <a href="wofr.html" class="korea_button-link"><strong>외국인 펜팔친구<br>찾아보기</strong></a><br><br>
                        </ul>
                        </nav>
                        <main>
                        
                        <p>Let's make Kpop friends and Korean penpals!<br>
                        Kpop과 함께 외국인 친구를 만들어 보세요!</p>
                        <p>Write Something on here!</p>
                        ${body}
                        ${list}
                        ${control}
                        </main>
                        <aside>
                        
                        <img src="/images/ad2.jpg" style="width:80; display:block;">

                        </aside>
                    </section>
                    <footer>
                    <a href="/">home</a>     │    support us      │    help      │    about
                    </footer>
            
                    </div>
                </body>
            </html>
            `;
            }, list: function (filelist){
                var list = '<ul>';
                    var i = 0;
                    while(i < filelist.length){
                        list = list + `<li><a href="/topic/${filelist[i].id}">${filelist[i].title}</a></li>`;
                        i = i + 1;
                    }
                    list = list + '</ul>';
                    return list;
            }
        }

        module.exports = template;