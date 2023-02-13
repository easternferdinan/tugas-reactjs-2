// COMMENT DAN UNCOMMENT BAGIAN UNTUK PREVIEW TUGAS

// Tugas Basic Component
// import BasicComponents from "./components/a_basic_components/BasicComponents";

// function App() {
//   return (
//     <div>
//       <BasicComponents />
//     </div>
//   );
// }

// export default App;
// ---------------------------------------

// Tugas Styling Components
// import StylingComponents from "./components/b_styling_components/StylingComponents";

// export default function App() {
//   return (
//     <StylingComponents />
//   )
// }
// ---------------------------------------

// Tugas Form Validation
// import React from "react";
// import FormValidation from "./components/c_form_validation";

// export default class App extends React.Component {
//   render() {
//     return <FormValidation />;
//   }
// }
// -----------------------------------------

// Tugas News Portal
import React, { Component } from "react";
import NewsPortal from "./components/d_news_portal/";

export default class App extends Component {
    render() {
        return (
            <div>
                <NewsPortal />
            </div>
        );
    }
}
// -----------------------------------------
