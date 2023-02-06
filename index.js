let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleLoveClick = () => {
  //bumb active index
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
  nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  //active group becomes after
  currentGroup.dataset.status = "after";

  nextGroup.dataset.status = "becoming-active-from-before";

  //next group becomes active
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

const handleHateClick = () => {
  //bumb active index
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
  nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  //active group becomes before
  currentGroup.dataset.status = "before";

  nextGroup.dataset.status = "becoming-active-from-after";

  //next group becomes active
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
};
