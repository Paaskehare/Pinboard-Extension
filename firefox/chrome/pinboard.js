CreatePopup = function(url, title, description) {

  /* Construct the pinboard bookmarking URL */

  var uri = 'https://pinboard.in/add?showtags=yes'
          + '&url=' + url
          + '&title=' + title
          + '&description=' + description;

  open(uri, 'Pinboard', 'toolbar=no,scrollbars=yes,width=750, height=700');
}

BookmarkButton = function() {
    var dom         = window.content
      , url         = encodeURIComponent(dom.location.href)
      , title       = dom.document.title
      , description = '';

    /* Set current selection on the page as the description if there is any */

    if (dom.document.getSelection)
      description = encodeURIComponent(dom.document.getSelection());

    CreatePopup(url, title, description);
}
