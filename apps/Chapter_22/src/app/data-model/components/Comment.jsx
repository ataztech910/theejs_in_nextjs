'use client';
import { Button, TextAreaField } from "@aws-amplify/ui-react";
import {useEffect, useState} from "react";

export default function CommentArea({initialComment, position, saveMethod}) {
    const [comment, setComment] = useState('');
    const [closed, setClosed] = useState(false);

    const saveComment = () => {
        setClosed(true);
        saveMethod(comment, [position.x, position.y]);
    }

    useEffect(() => {
        if(initialComment) {
            setClosed(true);
            setComment(initialComment);
        }
    }, [initialComment]);

    return (
        <section className="p-2 flex flex-col gap-2">
            {!closed &&
            <>
                <TextAreaField
                    descriptiveText="Enter a new comment"
                    label="New comment"
                    name="new_comment"
                    placeholder="New comment"
                    value={comment}
                    onChange={(e) => {setComment(e.target.value)}}
                    rows={3} />
                <Button onClick={saveComment}>Save</Button>
            </>
            }{
                closed &&
                <div>{comment}</div>
            }
        </section>
    )
}
