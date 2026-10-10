$(function () {
    const $navDark = $(".navbar-dark");
    const $navLight = $(".navbar-light");
    const $nav = $navDark.length > 0 ? $navDark : $navLight.length > 0 ? $navLight : null;
    const updateNavBarBG = () => {
        if ($nav) $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    };
    updateNavBarBG();
    $(document).scroll(updateNavBarBG);
});