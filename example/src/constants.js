import { Copy, Design, UserCircle, Settings, Image  } from "@bigbinary/neeto-icons";

import Button from "./Pages/Button";
import Dropdown from "./Pages/Dropdown";
import Tab from "./Pages/Tab";
import Input from "./Pages/Input";
import Select from "./Pages/Select";
import Toggles from "./Pages/Toggles";
import Modal from "./Pages/Modal";
import Pane from "./Pages/Pane";
import Tag from "./Pages/Tag";
import Toastr from "./Pages/Toastr";
import Misc from "./Pages/Misc";
import Formik from "./Pages/Formik";
import Layouts from "./Pages/Layouts";
import Avatar from "./Pages/Avatar";
import Tooltip from "./Pages/Tooltip";
import Typography from "./Pages/Typography";

export const COMPONENT_MAPPING = {
  Button: Button,
  Dropdown: Dropdown,
  Tab: Tab,
  Input: Input,
  Select: Select,
  Toggles: Toggles,
  Modal: Modal,
  Pane: Pane,
  Tag: Tag,
  Toastr: Toastr,
  Misc: Misc,
  Formik: Formik,
  Layouts: Layouts,
  Avatar: Avatar,
  Tooltip: Tooltip,
  Typography: Typography,
};

export const NAV_LINKS = [
  {
    label: "Components",
    to: "/components",
    icon: Copy,
    items: [
      {
        label: "Button",
        to: "/components/button",
      },
      {
        label: "Dropdown",
        to: "/components/dropdown",
      },
      {
        label: "Tab",
        to: "/components/tab",
      },
      {
        label: "Tag",
        to: "/components/tag",
      },
      {
        label: "Avatar",
        to: "/components/avatar",
      },
      {
        label: "Tooltip",
        to: "/components/tooltip",
      },
      {
        label: "Typography",
        to: "/components/typography",
      },
    ],
  },
  {
    label: "Form Elements",
    to: "/form-elements",
    icon: Design,
    items: [
      {
        label: "Input",
        to: "/form-elements/input",
      },
      {
        label: "Select",
        to: "/form-elements/select",
      },
      {
        label: "Toggles",
        to: "/form-elements/Toggles",
      },
    ],
  },
  {
    label: "Misc",
    to: "/misc",
    icon: UserCircle,
  },
  {
    label: "Formik",
    to: "/formik",
    icon: Image,
  },
  {
    label: "Overlays",
    to: "/overlays",
    icon: Settings,
    items: [
      {
        label: "Modal",
        to: "/overlays/modal",
      },
      {
        label: "Toastr",
        to: "/overlays/toastr",
      },
      {
        label: "Pane",
        to: "/overlays/pane",
      },
      {
        label: "Tooltip",
        to: "/overlays/tooltip",
      },
    ],
  },
  {
    label: "Layouts",
    to: "/layouts",
    icon: Image,
  },
];