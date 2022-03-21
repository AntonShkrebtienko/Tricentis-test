import React, { Component, ReactNode } from "react";
import ErrorIndicator from "../error-indicator";

interface IErrorTypes {
    children: ReactNode
}
export default class ErrorBoundry extends Component<IErrorTypes> {

    state = {
        hasError: false,
    }
    
    componentDidCatch() {
        this.setState({ hasError:true })
    }


    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return this.props.children;
    }
}