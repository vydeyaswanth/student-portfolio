import styles from './styles.module.css'
function InputUpload ({handleFileChange=()=>{}}) {
    return (
   
       <div class={styles.container}>
            <div class={styles.card}>
                <h3>Upload Cv</h3>
                <div class={styles.drop_box}>
                <header>
                    <h4>Select File here</h4>
                </header>
                <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
                    <input type="file" hidden accept=".doc,.docx,.pdf" id="fileID" />
                <input type='file' class={styles.btn} onChange={(e)=>{handleFileChange(e)}}/>
                </div>
            </div>
        </div>

    )
}

export default InputUpload