import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import Introduce from "Routes/Introduce";
import Online from "Routes/Online";
import EduDetail from "Routes/EduDetail";
import EduRequest from "Routes/EduRequest";
import Login from "Routes/Login";
import Join from "Routes/Join";
import ScrollToTop from "Routes/behavior/ScrollToTop";
import Review from "Routes/EduReview";
import FAQ from "Routes/FAQ";
import Company from "Routes/Company";
import History from "Routes/History";
import ChannelService from "Components/ChatBot";
import Field from "Routes/Field";

ChannelService.boot({
    pluginKey: "0f836e91-ac58-4e06-b9e4-faef0996d345",
    memberId: "junbox98221",
    profile: {
        name: "익명",
        email: "junbox98221",
        id: "junbox98221",
    },
});
const Router = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Switch>
            <Route path="/" exact component={Introduce} />
            <Route path="/online" exact component={Online} />
            <Route path="/online/:id" exact component={EduDetail} />
            <Route path="/edu_request" exact component={EduRequest} />
            <Route path="/login" exact component={Login} />
            <Route path="/join" exact component={Join} />
            <Route path="/review" component={Review} />
            <Route path="/FAQ" component={FAQ} />
            <Route path="/company" exact component={Company} />
            <Route path="/history" exact component={History} />
            <Route path="/field" exact component={Field} />
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
);

export default Router;
