export default function({ changePage, currentPage, title}) {

  return currentPage !== title ? (
    <li onClick={() => changePage(title)}>
        {title}
    </li>
  ) : (
    <li active="">
      {title}
    </li>
  )
}