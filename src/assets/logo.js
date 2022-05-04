import { useTheme } from "@mui/material/styles";

const Logo = () => {
    const theme = useTheme();

    return (
        <svg width="97" height="32.3" viewBox="0 0 97 32.3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                //This path is for the larger flame component
                d="M80.8,0H16.2C7.2,0,0,7.2,0,16.2s7.2,16.2,16.2,16.2h64.7c8.9,0,16.2-7.2,16.2-16.2S89.8,0,80.8,0z M47.2,30.4
	h-5.7V11.6l-8.6,12.1h-2.5l-8.6-12.2v18.9h-5.7V2.3h6.2l9.5,13.4l9.6-13.4h5.7V30.4z M81,26.7c-1.5,2.1-5,4.1-12.2,4.1
	c-9.2,0-15.2-5.9-15.2-15c0-9.3,4.9-14.2,13.9-14.2c6,0,11.4,2.9,12.4,10.3l-6.3,2C73,10,71,7.2,66.9,7.2c-5.2,0-7.2,3.8-7.2,8.4
	c0,5.9,4.9,9.6,9.8,9.6c1.7,0,2.8-0.1,4-0.6v-7.2h6v7.7L81,26V26.7z"
                fill="#ffffff"
            />
        </svg>
    );
};

export default Logo;
