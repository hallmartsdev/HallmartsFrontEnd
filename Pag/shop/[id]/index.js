import React from "react";
import Details from "../../../components/Details/Details";
import Layout from "../../../components/Layout/Layout";
import fetchHeadlinks from "../../../ApiScripts/Homepage/fetchHeadlinks";
import { formatHeadingLink } from "../../../config";
import fetchShopData from "../../../ApiScripts/ShopPage/fetchShopData";

import fetchShopId from "../../../ApiScripts/ShopPage/fetchShopId";

const detail = ({ shopItem, headlinks }) => {
    return (
        <>
            <Layout headlinks={headlinks}>
                <Details shopItem={shopItem} />
            </Layout>
        </>
    );
};

export async function getServerSideProps(context) {
    try {
        const shopItem = await fetchShopId({ id: context.params.id });
        let headlinks = await fetchHeadlinks();
        return {
            props: { shopItem, headlinks: headlinks.results },
        };
    } catch (e) {
        console.error(e);
        return {
            props: {},
        };
    }
}

let convertToDate = (val) => {
    let d = new Date(val);
    let string = d.toString();
    let stringArray = string.split(" ").slice(1, -6);
    let newString = stringArray.join(" ");
    return newString;
};

export default detail;
