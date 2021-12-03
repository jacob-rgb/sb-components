import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title:'example/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color'}
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    size:'normal',
    allCaps:false,
    fontColor:'#000'
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size:'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    size:'normal',
    color:'secondary'
}

export const Terciary = Template.bind({});
Terciary.args = {
    size:'normal',
    color:'tertiary'
}