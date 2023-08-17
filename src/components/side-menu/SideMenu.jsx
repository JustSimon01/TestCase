/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './SideMenu.module.css'

function SideMenu() {
  return (
    <ul className={`flex flex-col gap-y-10 w-5 mr-4 text-gray-500 text-base`}>
      <li className={`${styles.list_item} h-28`}><a href='#' className=' hover:text-yellow-400 h-28'>TWITCH</a></li>
      <li className={`${styles.list_item} h-28`}><a href='#' className=' hover:text-yellow-400 h-28'>INSTAGRAM</a></li>
      <li className={`${styles.list_item} h-28`}><a href='#' className=' hover:text-yellow-400 h-28'>FACEBOOK</a></li>
    </ul>
  );
}

export default SideMenu;
