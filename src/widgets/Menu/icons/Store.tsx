import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1000 1000" {...props}>
      <path d="M 700 738C 672 738 650 760 650 788C 650 815 672 837 700 837C 728 837 750 815 750 788C 750 760 728 738 700 738C 700 738 700 738 700 738M 250 738C 222 738 200 760 200 788C 200 815 222 837 250 837C 278 837 300 815 300 788C 300 760 278 738 250 738C 250 738 250 738 250 738M 700 688C 755 688 800 733 800 788C 800 842 755 887 700 887C 645 887 600 842 600 788C 600 733 645 688 700 688C 700 688 700 688 700 688M 250 688C 305 688 350 733 350 788C 350 842 305 887 250 887C 195 887 150 842 150 788C 150 733 195 688 250 688C 250 688 250 688 250 688M 110 263C 110 263 193 512 193 512C 193 512 679 512 679 512C 679 512 720 263 720 263C 720 263 110 263 110 263M 75 213C 75 213 750 213 750 213C 757 213 764 216 769 221C 774 227 776 234 775 242C 775 242 725 542 725 542C 723 554 712 562 700 563C 700 563 175 563 175 563C 164 562 155 556 151 545C 151 545 51 245 51 245C 49 238 50 229 55 223C 59 216 67 213 75 213C 75 213 75 213 75 213M 850 163C 850 163 925 163 925 163C 934 162 942 167 947 175C 951 183 951 192 947 200C 942 208 934 213 925 213C 925 213 871 213 871 213C 871 213 800 642 800 642C 798 654 787 662 775 663C 775 663 200 663 200 663C 191 663 183 658 178 650C 174 642 174 633 178 625C 183 617 191 612 200 613C 200 613 754 613 754 613C 754 613 825 183 825 183C 827 171 838 163 850 163C 850 163 850 163 850 163" />
    </Svg>
  );
};

export default Icon;