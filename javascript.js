function  changeCss() {
            var w =  screen.width;
            var h =  screen.height;
            if (w == '1920')
            {
               document.getElementById("stylesheet").href="style_1920.css";
            }
            else
            {
              if (w ==  '1366')
                {
                         document.getElementById("stylesheet").href="style_1366.css";
                }
            else
                  {
                         if (w == '1280')
                                {
                                         document.getElementById("stylesheet").href="style_1280.css";
                                }
                            else
                                  {
                                           if (w == '1024' && h == '720')
                                                 {
                                                         document.getElementById("stylesheet").href="style_1024.css";
                                                 }
                                           else
                                                  {
                                                         if (w == '320' && h <= '640')
                                                              {
                                                                    document.getElementById("stylesheet").href="style_320.css";
                                                             }
                                                 };
                                 };
                };
           }; 
         };
