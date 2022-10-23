var ele = document.getElementsByTagName("img");
            function fullscreen() 
            {
                if (ele.requestFullscreen()) {
                    ele.requestFullscreen();
                }
                else if (ele.webkitRequestFullscreen()) {
                    ele.webkitRequestFullscreen();
                }
                else if (ele.msRequestFullscreen()) {
                    ele.msRequestFullscreen();
                }
            }