import React from "react";
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";



//describe -говорит что мы описываем компоненту которую будем тестировать
describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'OurStatus'} />);
        //instanse- какбы экземпляр который мы сосздали при помощи класса
        const instance = component.getInstance();
        expect(instance.state.status).toBe("OurStatus");
    });
    test("After Creating Component, into should be Div", () => {
        const component = create(<ProfileStatus status={'OurStatus'} />);
        //instanse- какбы экземпляр который мы сосздали при помощи класса
        const root = component.root;
        let div = root.findByType('div')
        expect(div).not.toBeNull();
    });

    test("After Creating Component, into  Div should be 'OurStatus' ", () => {
        const component = create(<ProfileStatus status={'OurStatus'} />);
        //instanse- какбы экземпляр который мы сосздали при помощи класса
        const root = component.root;
        let div = root.findByType('div')
        expect(div.children[0]).toBe("OurStatus");
    });

    test("After Creating Component input=null", () => {
        const component = create(<ProfileStatus status={'OurStatus'} />);
        //instanse- какбы экземпляр который мы сосздали при помощи класса
        const root = component.root;

        expect(()=>{ let input = root.findByType('input')}).toThrow();
    });

    test("input should be showed ", () => {
        const component = create(<ProfileStatus status='OurStatus' />);
        const root = component.root;
        let div = root.findByType('div')
        ///вызываем принудительно метод, который есть у дивки
        div.props.onClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe("OurStatus");
    });

    test("callback shound be called", () => {
        ///объявл фейковый колбек
        const mockCallback=jest.fn()
            ///отдаем его в пропсы как -UpDateProfileStatus
        const component = create(<ProfileStatus status='OurStatus' UpDateProfileStatus={mockCallback}/>);

        ///обращаемся к компоненте
        const instance = component.getInstance();

        ///вызываем принудительно метод, который запустит врутри себя фейковую ф-ю
        instance.deActivateEditMode()

        expect(mockCallback.mock.calls.length).toBe(1);
    });

});