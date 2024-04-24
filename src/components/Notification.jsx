import { useState } from "react";
import { Notification, Placeholder } from "rsuite";

const NotificationUnderDevelopement = () => {
    const [IsDevelop] = useState(false)

    return (<>
        {IsDevelop &&
            <div className="notif flex justify-center fixed inset-x-0 top-4 z-50">
                <Notification closable type="warning" header="warning">
                    <Placeholder.Paragraph style={{ width: 230 }} rows={0} />
                    <p className="font-bold text-lg">Under Development</p>
                </Notification>
            </div>
        }
    </>);
}

export default NotificationUnderDevelopement;