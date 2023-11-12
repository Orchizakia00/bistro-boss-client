import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../../assets/shop/banner2.jpg';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {

    const categories = ['Salad', 'Pizza', 'Dessert', 'Soup', 'Drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();
    console.log(category);

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover title={'Order Food'} img={orderImg}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <div className='mt-16 text-center'>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Drinks</Tab>
                    </div>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;