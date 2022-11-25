import { Popover, Typography } from "antd";
import { useState } from "react";
import { MoreOutlined } from "@ant-design/icons"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import './OrderActionsPopover.css'


export function OrderActionsPopover({ data, onActionSelect }: any) {

    const [open, setOpen] = useState(false);

    const handleHide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };


    const handleActionItemSelect = (actionName: string) => {
        onActionSelect(actionName)
        handleHide()
    }

    const content = (<ul className="menu-items">
        <li className="menu-item" onClick={() => handleActionItemSelect('DELETE')}>
            <DeleteOutlined style={{ paddingRight: 10 }} />
            <Typography.Text>Delete</Typography.Text>
        </li>
        <li className="menu-item" onClick={() => handleActionItemSelect('EDIT')}>
            <EditOutlined style={{ paddingRight: 10 }} />
            <Typography.Text>Edit</Typography.Text>
        </li>
    </ul>)

    return (
        <Popover
            content={content}
            trigger="click"
            placement="left"
            open={open}

            onOpenChange={handleOpenChange}
        >
            <MoreOutlined />
        </Popover>
    )
}