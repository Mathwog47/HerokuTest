/* eslint-disable no-undef */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      minHeight: {
        screen: "100vh",
      },
      maxWidth: {
        container: "992px",
        wide: "1600px",
        ultra: "2000px",
        "max-100": "100px",
        "max-200": "200px",
        "max-300": "300px",
        "max-400": "400px",
        "max-500": "500px",
        "max-600": "600px",
        "max-700": "700px",
        "max-800": "800px",
        "max-900": "900px",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        screen: "100vw",
      },
      minWidth: {
        0: "0",
        "min-10": "10px",
        "min-100": "100px",
        "min-200": "200px",
        "min-300": "300px",
        "min-400": "400px",
        "min-500": "500px",
        "min-600": "600px",
        "min-700": "700px",
        "min-800": "800px",
        "min-900": "900px",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        steelBlue: '#01579B',
        orange: "#F46C3C",
        green: "#13ce66",
        red: 'red',
        yellow: "#ffc82c",
        myLight: "#fff",
        lightSeaBlue: "#BFCDFF",
        "gray-dark": "#273444",
        gray: "#8492a6",
        grayBlack: '#D9D9D9',
        cementLight: '#F5F5F5',
        mediumStateBlue: "#7b68ee",
        "gray-light": "#7E7E7E",
        "seaGreen": "#49b697",
        light: '#fff',
        'glass-light': 'rgba(255, 255, 255, 0.1)', 
        'glass-medium': 'rgba(255, 255, 255, 0.18)', 
        'glass-dark': 'rgba(255, 255, 255, 0.25)',
        'glass-colorful': 'rgba(0, 116, 217, 0.3)'
      },
      gradientColorStops: {
        'glass-start': 'rgba(255, 255, 255, 0.2)',
        'glass-end': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        vs: "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
      },
      fontWeight: {
        'hairline': 100,
        'thin': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      borderWidth: {
        'light': '1px',
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
      },
      borderColor: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
        'glass-outline': 'rgba(255, 255, 255, 0.3)',
      },
      borderRadius: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
      },
      opacity: {
        0: "0",
        20: "0.2",
        40: "0.4",
        60: "0.6",
        80: "0.8",
        100: "1",
      },
      backgroundSize: ({ theme }) => ({
        auto: "auto",
        cover: "cover",
        contain: "contain",
        ...theme("spacing"),
      }),
      lineHeight: {
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        'glass': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'glass1': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-light': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'glass-heavy': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom': '0 4px 30px rgba(0, 0, 0, 0.1)'
      },
      utilities: {
        ".ellipsis": {
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        },
      },
      variants: {
        transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
      },
      backgroundColor: {
        primary: "#1fb6ff",
        secondary: "#7e5bef",
        accent: "#ff49db",
        cta: "#ff7849",
        success: "#13ce66",
        warning: "#ffc82c",
        dark: "#273444",
        medium: "#8492a6",
        light: "#d3dce6",
      },
      transitionTimingFunction: ['hover', 'focus'],
      backdropFilter: {
        'none': 'none',
        'light': 'blur(5px)',
        'medium': 'blur(10px)',
        'heavy': 'blur(20px)',
      },
      display: {
        block: "block",
        inline: "inline",
        "inline-block": "inline-block",
        hidden: "none",
      },
      visibility: {
        visible: "visible",
        invisible: "hidden",
      },
      flexBasis: {
        0: "0%",
        1: "8.333333%",
        2: "16.666667%",
        3: "25%",
        4: "33.333333%",
        5: "41.666667%",
        6: "50%",
        7: "58.333333%",
        8: "66.666667%",
        9: "75%",
        10: "83.333333%",
        11: "91.666667%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
      },
      flexGrow: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      flexShrink: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      order: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
    },
  },
  // ...other configurations
};
