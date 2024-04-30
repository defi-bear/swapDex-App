import { FC } from "react";
import { Icon } from "@chakra-ui/react";
import type { IconProps } from "@chakra-ui/react";

export const Logo: FC<IconProps> = ({ ...rest }) => {
  return (
    <Icon viewBox="0 0 400 434" {...rest}>
      <path
        fill="#F50DB4"
        d="M325.144 65.77c.583-10.228 1.975-16.974 4.774-23.135 1.107-2.439 2.145-4.435 2.305-4.435.16 0-.321 1.8-1.07 4-2.035 5.98-2.369 14.157-.967 23.672 1.779 12.073 2.79 13.815 15.596 26.856 6.006 6.117 12.993 13.831 15.525 17.143l4.605 6.023-4.605-4.304c-5.631-5.263-18.583-15.528-21.444-16.996-1.918-.984-2.203-.967-3.386.207-1.09 1.081-1.32 2.706-1.472 10.388-.235 11.971-1.873 19.656-5.825 27.339-2.138 4.156-2.475 3.269-.54-1.422 1.444-3.502 1.591-5.042 1.58-16.631-.022-23.286-2.796-28.884-19.067-38.474-4.121-2.43-10.913-5.934-15.091-7.787-4.179-1.853-7.498-3.467-7.377-3.588.461-.457 16.328 4.158 22.714 6.606 9.5 3.641 11.068 4.113 12.222 3.674.773-.295 1.147-2.539 1.523-9.136Z"
      />
      <path
        fill="#F50DB4"
        d="M124.431 31.893c-5.636-.87-5.874-.971-3.222-1.377 5.083-.777 17.083.282 25.353 2.238 19.305 4.564 36.872 16.256 55.624 37.021l4.982 5.517 7.127-1.14c30.023-4.798 60.566-.984 86.112 10.753 7.028 3.229 18.109 9.657 19.493 11.309.441.526 1.251 3.915 1.799 7.531 1.898 12.51.948 22.098-2.899 29.26-2.093 3.898-2.21 5.133-.803 8.468 1.124 2.662 4.256 4.632 7.358 4.627 6.348-.008 13.181-10.215 16.347-24.417l1.258-5.641 2.492 2.807c13.665 15.399 24.398 36.399 26.242 51.347l.48 3.897-2.297-3.543c-3.953-6.096-7.925-10.247-13.011-13.594-9.169-6.034-18.864-8.088-44.539-9.433-23.188-1.216-36.312-3.186-49.325-7.406-22.141-7.18-33.303-16.742-59.603-51.061-11.682-15.244-18.902-23.678-26.085-30.47-16.32-15.432-32.356-23.526-52.883-26.693ZM135.377 105.713c-11.44-15.666-18.519-39.684-16.986-57.639l.473-5.556 2.605.473c4.89.887 13.322 4.008 17.27 6.393 10.835 6.545 15.526 15.162 20.298 37.288 1.398 6.481 3.232 13.815 4.076 16.298 1.359 3.997 6.492 13.332 10.666 19.395 3.006 4.366 1.009 6.435-5.636 5.839-10.149-.911-23.897-10.348-32.766-22.491ZM311.254 222.301c-53.465-21.41-72.296-39.994-72.296-71.351 0-4.614.16-8.39.355-8.39.194 0 2.263 1.523 4.596 3.385 10.842 8.648 22.982 12.342 56.592 17.219 19.778 2.87 30.907 5.188 41.174 8.574 32.633 10.764 52.822 32.607 57.637 62.36 1.399 8.645.579 24.857-1.689 33.402-1.791 6.748-7.256 18.913-8.705 19.379-.402.13-.796-1.402-.899-3.486-.55-11.172-6.226-22.048-15.759-30.196-10.839-9.263-25.401-16.638-61.006-30.896ZM273.719 231.195c-.67-3.964-1.831-9.027-2.581-11.251l-1.365-4.043 2.534 2.829c3.507 3.915 6.278 8.924 8.626 15.595 1.793 5.092 1.994 6.607 1.981 14.881-.014 8.124-.238 9.826-1.893 14.41-2.61 7.227-5.849 12.351-11.284 17.852-9.766 9.886-22.322 15.36-40.442 17.63-3.15.394-12.33 1.059-20.4 1.476-20.339 1.052-33.725 3.226-45.753 7.426-1.73.605-3.274.972-3.431.816-.486-.482 7.703-5.337 14.467-8.578 9.538-4.57 19.033-7.063 40.306-10.587 10.508-1.741 21.36-3.852 24.116-4.693 26.024-7.935 39.401-28.414 35.119-53.763Z"
      />
      <path
        fill="#F50DB4"
        d="M298.228 274.486c-7.103-15.187-8.735-29.851-4.843-43.527.417-1.461 1.086-2.657 1.489-2.657.402 0 2.079.901 3.724 2.003 3.274 2.191 9.839 5.883 27.33 15.367 21.826 11.835 34.27 21 42.732 31.47 7.411 9.17 11.998 19.613 14.205 32.348 1.25 7.214.518 24.571-1.344 31.835-5.868 22.904-19.506 40.895-38.959 51.393-2.85 1.538-5.409 2.801-5.686 2.806-.277.006.762-2.62 2.308-5.836 6.544-13.605 7.289-26.839 2.342-41.57-3.03-9.019-9.206-20.024-21.677-38.625-14.499-21.625-18.054-27.38-21.621-35.007ZM97.408 356.432c19.841-16.661 44.527-28.498 67.014-32.131 9.691-1.566 25.835-.944 34.809 1.34 14.385 3.661 27.253 11.862 33.945 21.632 6.54 9.55 9.346 17.871 12.267 36.386 1.153 7.303 2.406 14.637 2.785 16.298 2.194 9.595 6.463 17.265 11.754 21.117 8.403 6.117 22.872 6.497 37.105.975 2.416-.938 4.513-1.585 4.661-1.439.516.51-6.651 5.282-11.708 7.794-6.803 3.38-12.213 4.686-19.402 4.686-13.036 0-23.859-6.595-32.89-20.044-1.777-2.647-5.772-10.575-8.877-17.617-9.535-21.63-14.243-28.219-25.315-35.431-9.634-6.275-22.06-7.399-31.408-2.84-12.278 5.988-15.704 21.594-6.91 31.484 3.495 3.931 10.013 7.322 15.343 7.981 9.971 1.233 18.54-6.311 18.54-16.324 0-6.501-2.512-10.211-8.837-13.05-8.638-3.877-17.924.655-17.879 8.726.019 3.442 1.526 5.603 4.995 7.164 2.225 1.001 2.277 1.081.462.706-7.926-1.635-9.783-11.138-3.41-17.447 7.651-7.574 23.472-4.232 28.905 6.106 2.283 4.343 2.548 12.991.558 18.213-4.454 11.688-17.44 17.835-30.613 14.49-8.969-2.277-12.621-4.743-23.435-15.821-18.79-19.251-26.085-22.981-53.174-27.188l-5.191-.805 5.906-4.961Z"
      />
      <path
        fill="#F50DB4"
        fillRule="evenodd"
        d="M9.242 11.878c62.75 75.75 105.971 107.002 110.774 113.605 3.965 5.452 2.473 10.353-4.321 14.195-3.778 2.135-11.545 4.299-15.434 4.299-4.399 0-5.909-1.687-5.909-1.687-2.55-2.406-3.987-1.985-17.084-25.107-18.182-28.06-33.399-51.339-33.814-51.729-.96-.9-.943-.87 31.96 57.684 5.317 12.204 1.058 16.684 1.058 18.422 0 3.536-.97 5.395-5.356 10.26-7.31 8.113-10.579 17.227-12.938 36.091-2.645 21.147-10.082 36.084-30.693 61.649-12.065 14.966-14.039 17.709-17.083 23.74-3.835 7.596-4.89 11.85-5.316 21.442-.452 10.141.428 16.692 3.543 26.388 2.727 8.489 5.574 14.094 12.851 25.305 6.28 9.674 9.897 16.864 9.897 19.676 0 2.238.43 2.241 10.161.055 23.29-5.23 42.202-14.43 52.838-25.704 6.582-6.979 8.127-10.832 8.178-20.395.033-6.255-.189-7.564-1.889-11.163-2.767-5.856-7.805-10.726-18.908-18.275-14.549-9.892-20.763-17.855-22.48-28.807-1.407-8.986.226-15.326 8.275-32.103 8.33-17.366 10.395-24.766 11.791-42.27.902-11.308 2.151-15.768 5.418-19.348 3.407-3.733 6.474-4.997 14.907-6.143 13.746-1.868 22.5-5.406 29.695-12 6.242-5.72 8.854-11.233 9.255-19.531l.304-6.289-3.488-4.045C122.802 105.445.782.363.004.363c-.165 0 3.991 5.182 9.238 11.515Zm29.225 294.339c2.857-5.031 1.34-11.498-3.438-14.657-4.514-2.986-11.526-1.58-11.526 2.31 0 1.187.66 2.051 2.147 2.813 2.505 1.282 2.687 2.723.716 5.669-1.995 2.983-1.834 5.606.455 7.389 3.689 2.873 8.911 1.293 11.646-3.524ZM147.597 165.257c-6.453 1.971-12.727 8.774-14.669 15.907-1.184 4.351-.512 11.985 1.262 14.342 2.867 3.808 5.639 4.811 13.146 4.758 14.697-.102 27.473-6.371 28.958-14.208 1.218-6.424-4.393-15.327-12.122-19.236-3.989-2.016-12.471-2.816-16.575-1.563Zm17.181 13.362c2.266-3.203 1.275-6.665-2.58-9.006-7.34-4.458-18.441-.769-18.441 6.128 0 3.433 5.789 7.179 11.095 7.179 3.532 0 8.365-2.095 9.926-4.301Z"
        clipRule="evenodd"
      />
    </Icon>
  );
};
