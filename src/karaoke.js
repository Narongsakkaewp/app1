import React, { useState } from "react";

function Karaoke() {
    const [regularHours, setRegularHours] = useState("");
    const [studentHours, setStudentHours] = useState("");
    const [isStudent, setIsStudent] = useState(false);
    const [total, setTotal] = useState("");

    const handleCalculate = () => {
        const hours = isStudent ? studentHours : regularHours;
        if (!hours) {
            alert("กรุณากรอกจำนวนชั่วโมง");
            return;
        }
        const rate = isStudent ? 80 : 120;
        setTotal(hours * rate);
    };

    return (
        <div style={{ marginTop: "10px", marginLeft: "10px" }}>
            <table width="350" border="2" cellPadding="5">
                <tr>
                    <td colSpan="2" style={{fontWeight: "bold", padding: "10px" }}>ร้านคาราโอเกะ
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{border: "2px solid black"}}>
                        <input type="radio" name="membership" id="nohave" checked={!isStudent} onChange={() => setIsStudent(false)}/>
                        ไม่มีบัตรนักศึกษา <br />
                        &nbsp;&nbsp;&nbsp;ชั่วโมงละ 120 บาท จำนวน &nbsp;
                        <input type="number" value={regularHours} onChange={(e) => setRegularHours(e.target.value)} disabled={isStudent}
                            style={{width: "65px", textAlign: "center" }}
                        />{" "}ชั่วโมง

                        <br />
                        <input type="radio" name="membership" id="have" checked={isStudent} onChange={() => setIsStudent(true)}/>
                        มีบัตรนักศึกษา <br />
                        &nbsp;&nbsp;&nbsp;ชั่วโมงละ 80 บาท จำนวน &nbsp;
                        <input type="number" value={studentHours} onChange={(e) => setStudentHours(e.target.value)} disabled={!isStudent}
                            style={{width: "65px", textAlign: "center" }}
                        />{" "}ชั่วโมง
                    </td>
                </tr>

                <tr>
                    <td>
                        <button onClick={handleCalculate} style={{fontSize: "13px", cursor: "pointer" }}>คิดเงิน
                        </button>
                        <br />
                        <div style={{ marginTop: "10px" }}> รวมเป็นเงินทั้งสิ้น ={" "}
                            <input type="text" value={total} readOnly style={{ textAlign: "right", width: "100px" }}/>{" "} บาท
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Karaoke;