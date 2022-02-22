import React from "react";
import { Alert } from "@material-ui/lab";

export default function AlertMessage({ alertStatus }) {
    return (
        <div>
            {alertStatus.isSuccess() ? (
                <Alert
                    severity="success"
                    onClose={() => {
                        alertStatus.switchToIdle("");
                    }}
                >
                    {alertStatus.message}
                </Alert>
            ) : alertStatus.isFailure() ? (
                <Alert
                    severity="error"
                    onClose={() => {
                        alertStatus.switchToIdle("");
                    }}
                >
                    {alertStatus.message}
                </Alert>
            ) : (
                <></>
            )}
        </div>
    );
}
