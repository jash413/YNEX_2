import React from 'react';
import CreateUpdateTask from '@/shared/layout-components/forms/create-update-task';
import { useRouter } from 'next/router';

const EditTask = () => {
    const router = useRouter();
    const { editTask } = router.query;
    return (
        <>
        <CreateUpdateTask formType="update" taskId={editTask} />
        </>
    );
    };
    EditTask.layout = "Contentlayout";  

export default EditTask;
