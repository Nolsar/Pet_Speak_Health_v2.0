import React from 'react';
import IBMW from '../utils/IBMWatson';

function MedicalRecords() {
    return (
        <div className="container">
            <h1>Medical Records</h1>
            <p></p>
            <div>
                <h2>Transcribe Medical Notes Here</h2>
            < IBMW />
            </div>
        </div>
    )
}

export default MedicalRecords;