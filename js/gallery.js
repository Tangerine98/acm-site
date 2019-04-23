(function () {
    // carousel_1 variables
    var carousel_1Content, carousel_1Index, carousel_1Length, firstClone_1, firstItem_1, isAnimating_1, itemWidth_1, lastItem_1;
    carousel_1Content = $(".carousel_1__content");
    carousel_1Index = 0;
    carousel_1Length = carousel_1Content.children().length;
    isAnimating_1 = false;
    itemWidth_1 = 100 / carousel_1Length;
    firstItem_1 = $(carousel_1Content.children()[0]);
    lastItem_1 = $(carousel_1Content.children()[carousel_1Length - 1]);
    firstClone_1 = null;

    // Apply the 3D transformations to avoid a white blink when you slide for the first time
    carousel_1Content.css("width", carousel_1Length * 100 + "%");
    carousel_1Content.transition({
      x: `${carousel_1Index * -itemWidth_1}%` },
    0);

    $.each(carousel_1Content.children(), function () {
      return $(this).css("width", itemWidth_1 + "%");
    });


    // Click on the "Previous" button
    $(".nav_1--left").on("click", function () {
      if (isAnimating_1) {
        return;
      }
      isAnimating_1 = true;
      carousel_1Index--;
      if (carousel_1Index === -1) {
        lastItem_1.prependTo(carousel_1Content);
        carousel_1Content.transition({
          x: `${(carousel_1Index + 2) * -itemWidth_1}%` },
        0);
        return carousel_1Content.transition({
          x: `${(carousel_1Index + 1) * -itemWidth_1}%` },
        1000, "easeInOutExpo", function () {
          carousel_1Index = carousel_1Length - 1;
          lastItem_1.appendTo(carousel_1Content);
          carousel_1Content.transition({
            x: `${carousel_1Index * -itemWidth_1}%` },
          0);
          return isAnimating_1 = false;
        });
      } else {
        return carousel_1Content.transition({
          x: `${carousel_1Index * -itemWidth_1}%` },
        1000, "easeInOutExpo", function () {
          return isAnimating_1 = false;
        });
      }
    });
  
    // Click on the "Next" button
    $(".nav_1--right").on("click", function () {
      if (isAnimating_1) {
        return;
      }
      isAnimating_1 = true;
      carousel_1Index++;
      return carousel_1Content.transition({
        x: `${carousel_1Index * -itemWidth_1}%` },
      1000, "easeInOutExpo", function () {
        isAnimating_1 = false;
        if (firstClone_1) {
          carousel_1Index = 0;
          carousel_1Content.transition({
            x: `${carousel_1Index * -itemWidth_1}%` },
          0);
          firstClone_1.remove();
          firstClone_1 = null;
          carousel_1Length = carousel_1Content.children().length;
          itemWidth_1 = 100 / carousel_1Length;
          carousel_1Content.css("width", carousel_1Length * 100 + "%");
          $.each(carousel_1Content.children(), function () {
            return $(this).css("width", itemWidth_1 + "%");
          });
          return;
        }
        if (carousel_1Index === carousel_1Length - 1) {
          carousel_1Length++;
          itemWidth_1 = 100 / carousel_1Length;
          firstClone_1 = firstItem_1.clone();
          firstClone_1.addClass("clone");
          firstClone_1.appendTo(carousel_1Content);
          carousel_1Content.css("width", carousel_1Length * 100 + "%");
          $.each(carousel_1Content.children(), function () {
            return $(this).css("width", itemWidth_1 + "%");
          });
          return carousel_1Content.transition({
            x: `${carousel_1Index * -itemWidth_1}%` },
          0);
        }
      });
    });

  }).call(this);

  (function () {
    // carousel_2 variables
    var carousel_2Content, carousel_2Index, carousel_2Length, firstClone_2, firstItem_2, isAnimating_2, itemWidth_2, lastItem_2;
    carousel_2Content = $(".carousel_2__content");
    carousel_2Index = 0;
    carousel_2Length = carousel_2Content.children().length;
    isAnimating_2 = false;
    itemWidth_2 = 100 / carousel_2Length;
    firstItem_2 = $(carousel_2Content.children()[0]);
    lastItem_2 = $(carousel_2Content.children()[carousel_2Length - 1]);
    firstClone_2 = null;

    // Apply the 3D transformations to avoid a white blink when you slide for the first time
    carousel_2Content.css("width", carousel_2Length * 100 + "%");
    carousel_2Content.transition({
      x: `${carousel_2Index * -itemWidth_2}%` },
    0);

    $.each(carousel_2Content.children(), function () {
      return $(this).css("width", itemWidth_2 + "%");
    });


    // Click on the "Previous" button
    $(".nav_2--left").on("click", function () {
      if (isAnimating_2) {
        return;
      }
      isAnimating_2 = true;
      carousel_2Index--;
      if (carousel_2Index === -1) {
        lastItem_2.prependTo(carousel_2Content);
        carousel_2Content.transition({
          x: `${(carousel_2Index + 2) * -itemWidth_2}%` },
        0);
        return carousel_2Content.transition({
          x: `${(carousel_2Index + 1) * -itemWidth_2}%` },
        1000, "easeInOutExpo", function () {
          carousel_2Index = carousel_2Length - 1;
          lastItem_2.appendTo(carousel_2Content);
          carousel_2Content.transition({
            x: `${carousel_2Index * -itemWidth_2}%` },
          0);
          return isAnimating_2 = false;
        });
      } else {
        return carousel_2Content.transition({
          x: `${carousel_2Index * -itemWidth_2}%` },
        1000, "easeInOutExpo", function () {
          return isAnimating_2 = false;
        });
      }
    });
  
    // Click on the "Next" button
    $(".nav_2--right").on("click", function () {
      if (isAnimating_2) {
        return;
      }
      isAnimating_2 = true;
      carousel_2Index++;
      return carousel_2Content.transition({
        x: `${carousel_2Index * -itemWidth_2}%` },
      1000, "easeInOutExpo", function () {
        isAnimating_2 = false;
        if (firstClone_2) {
          carousel_2Index = 0;
          carousel_2Content.transition({
            x: `${carousel_2Index * -itemWidth_2}%` },
          0);
          firstClone_2.remove();
          firstClone_2 = null;
          carousel_2Length = carousel_2Content.children().length;
          itemWidth_2 = 100 / carousel_2Length;
          carousel_2Content.css("width", carousel_2Length * 100 + "%");
          $.each(carousel_2Content.children(), function () {
            return $(this).css("width", itemWidth_2 + "%");
          });
          return;
        }
        if (carousel_2Index === carousel_2Length - 1) {
          carousel_2Length++;
          itemWidth_2 = 100 / carousel_2Length;
          firstClone_2 = firstItem_2.clone();
          firstClone_2.addClass("clone");
          firstClone_2.appendTo(carousel_2Content);
          carousel_2Content.css("width", carousel_2Length * 100 + "%");
          $.each(carousel_2Content.children(), function () {
            return $(this).css("width", itemWidth_2 + "%");
          });
          return carousel_2Content.transition({
            x: `${carousel_2Index * -itemWidth_2}%` },
          0);
        }
      });
    });

  }).call(this);