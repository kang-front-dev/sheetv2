let wrapperBlock = document.querySelectorAll(".wrapper_block")

for (let i = 0; i < wrapperBlock.length; i++) {
    wrapperBlock[i].addEventListener("mouseover", function () {
        let numberOfBlock = wrapperBlock[i].textContent

        numberOfBlock = Number(numberOfBlock)

        let topBlock = wrapperBlock[i - 24],
            leftBlock = wrapperBlock[i - 1],
            rightBlock = wrapperBlock[i + 1],
            bottomBlock = wrapperBlock[i + 24]

        if (!wrapperBlock[i].classList.contains("wrapper_block-active")) {
            wrapperBlock[i].style.transform = "scale(1.3)"
        }

        if (i + 24 < 264) {
            if (!bottomBlock.classList.contains("wrapper_block-active")) {
                if (i + 24 < 264) {
                    bottomBlock.style.transform = "scale(1.2)"
                }
            }
        }

        if (i - 24 > 0) {
            if (!topBlock.classList.contains("wrapper_block-active")) {
                if (i - 24 > 0) {

                    topBlock.style.transform = "scale(1.2)"
                }
            }
        }

        if (i - 1 > 0) {
            if (!leftBlock.classList.contains("wrapper_block-active")) {
                leftBlock.style.transform = "scale(1.2)"
            }
        }

        if (i + 1 < 288) {
            if (!rightBlock.classList.contains("wrapper_block-active")) {
                rightBlock.style.transform = "scale(1.2)"
            }
        }





        $(wrapperBlock).not(wrapperBlock[i]).not(topBlock).not(leftBlock).not(rightBlock).not(bottomBlock).css({
            transform: "scale(1)",
            background: "rgb(0, 0, 0)"
        })



        console.log(numberOfBlock);
    })

}

for (let i = 0; i < wrapperBlock.length; i++) {
    wrapperBlock[i].addEventListener('click', function () {
        let topBlock = wrapperBlock[i - 24],
            leftBlock = wrapperBlock[i - 1],
            rightBlock = wrapperBlock[i + 1],
            bottomBlock = wrapperBlock[i + 24]

        wrapperBlock[i].style.background = "#FFFFFF"


        if (i + 24 < 288) {
            bottomBlock.classList.add("wrapper_block-active")
            bottomBlock.style.background = "#FFFFFF"
        }
        if (i - 24 > 0) {
            topBlock.classList.add("wrapper_block-active")
            topBlock.style.background = "#FFFFFF"
        }
        if (i - 1 > 0) {
            leftBlock.classList.add("wrapper_block-active")
            leftBlock.style.background = "#FFFFFF"
        }
        if (i + 1 < 288) {
            rightBlock.classList.add("wrapper_block-active")
            rightBlock.style.background = "#FFFFFF"
        }

        wrapperBlock[i].classList.add("wrapper_block-active")


        createIndicator()




        setTimeout(() => {
            wrapperBlock[i].style.background = "#000000"


            if (i + 24 < 288) {
                bottomBlock.style.background = "#000000"
            }
            if (i - 24 > 0) {
                topBlock.style.background = "#000000"
            }
            if (i - 1 > 0) {
                leftBlock.style.background = "#000000"
            }
            if (i + 1 < 288) {
                rightBlock.style.background = "#000000"
            }

        }, 120);


        $(wrapperBlock).not(wrapperBlock[i]).not(topBlock).not(leftBlock).not(rightBlock).not(bottomBlock).css({
            background: "rgb(0, 0, 0)"
        })
    })





}

function createIndicator() {
    let points = $(".wrapper_block-active").length
    console.log(points);
    let newBlock = document.createElement("div")
    $(".indicator_parent").append(newBlock)
    newBlock.className = "indicator"
    newBlock.textContent = points.toString()

    $(".indicator").not(newBlock).remove()
    if (points === 288) {
        $(".win").css({
            display: "block"
        })
        setTimeout(() => {
            $(".win").css({
                opacity: "1"
            })

            setTimeout(() => {
                window.location.reload();
            }, 1000);

        }, 300);
    }
}




$(".header_title").on("click", function () {
    console.log("animated");
    $(this).css({
        animation: "gradient 0.5s ease-in-out"
    })
    setTimeout(() => {
        $(this).css({
            animation: "none"
        })
    }, 500);
})




setTimeout(() => {
    $(".header_attention").css({
        opacity: "0"
    })
    $(".header_subtitle").css({
        opacity: "0"
    })

    setTimeout(() => {
        $(".header_attention").css({
            display: "none"
        })
        $(".header_subtitle").css({
            display: "none"
        })
    }, 300);
}, 3000);



