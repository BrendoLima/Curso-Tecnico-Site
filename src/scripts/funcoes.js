function toggle_button(botao) {
    let valorBotao = botao.textContent;
    console.log(valorBotao);
    const buttonContainer = botao.closest(".button_container");
    if (buttonContainer) {
      const botoesNaContainer = buttonContainer.querySelectorAll(".button");
      botoesNaContainer.forEach((element) => {
        if (element !== botao) {
          element.classList.remove("selected");
        }
      });
  
      if (!botao.classList.contains("selected")) {
        botao.classList.add("selected");
      }
    }
    change_src_iframe(valorBotao);
    auto_size_iframe();
  }
  
  function change_src_iframe(valor) {
    let iframes = document.getElementsByClassName("content");
  
    if (iframes.length > 0) {
      iframes[0].src = "./contents/" + valor + ".html";
    }
  }
  
  function auto_size_iframe() {
    const iframe = document.querySelector(".content");
  
    if (iframe) {
      iframe.onload = function () {
        iframe.style.height =
          iframe.contentDocument.body.scrollHeight + 50 + "px";
      };
    }
  }
  
  document.addEventListener("DOMContentLoaded", auto_size_iframe);
  