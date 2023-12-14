let menumobile = document.querySelector('.mobilemenuicon');
            if (menumobile.classList.contains('open')) {
                menumobile.classList.remove('open');
                document.querySelector('.iconmenu').src = "pictures/ic_menu-big.png";
            }
            else {
                menumobile.classList.add('open');
                document.querySelector('.iconmenu').src = "pictures/ic_close.png";
            }