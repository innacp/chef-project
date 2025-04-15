import pickleIcon from '../public/assets/pickle-icon.svg';

export default function Header() {
return(
    <header>
        <img src={pickleIcon} alt="pickle-icon" />
        <h1>Chef Pickle</h1>
    </header>
)


}