import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [senderId, setSenderId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [amount, setAmount] = useState("");
  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Fetch all users with balance
  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const transferMoney = async () => {
    setSuccess("");
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/transfer", {
        senderId,
        receiverId,
        amount: Number(amount)
      });

      setSuccess(res.data.message);
      fetchUsers();
      setTimeout(() => setSuccess(""), 3000);

    } catch (err) {
      setError(err.response?.data?.error || "Transfer failed");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>

        {/* TRANSFER CARD */}
        <div style={styles.card}>
          <h2 style={styles.title}>💸 Fund Transfer</h2>

          <input
            style={styles.input}
            placeholder="Sender ID"
            value={senderId}
            onChange={e => setSenderId(e.target.value)}
          />
          <input
            style={styles.input}
            placeholder="Receiver ID"
            value={receiverId}
            onChange={e => setReceiverId(e.target.value)}
          />
          <input
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />

          <button style={styles.button} onClick={transferMoney}>
            Transfer Money
          </button>

          {success && <div style={styles.success}>{success}</div>}
          {error && <div style={styles.error}>{error}</div>}
        </div>

        {/* ACCOUNT HOLDERS */}
        <div style={{ ...styles.card, marginTop: "20px" }}>
          <h3>👤 Account Holders</h3>

          {users.length === 0 ? (
            <p style={{ color: "#666" }}>No users found</p>
          ) : (
            <ul style={styles.list}>
              {users.map(user => (
                <li key={user._id} style={styles.listItem}>
                  <strong>{user.name}</strong><br />
                  Balance: ₹{user.balance}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}

/* ===================== STYLES ===================== */

const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    width: "100%",
    maxWidth: "420px",
    padding: "20px"
  },
  card: {
    background: "#ffffff",
    borderRadius: "14px",
    padding: "25px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.25)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    cursor: "pointer",
    marginTop: "5px"
  },
  success: {
    marginTop: "12px",
    padding: "10px",
    background: "#d4edda",
    color: "#155724",
    borderRadius: "6px",
    textAlign: "center"
  },
  error: {
    marginTop: "12px",
    padding: "10px",
    background: "#f8d7da",
    color: "#721c24",
    borderRadius: "6px",
    textAlign: "center"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    background: "#f1f1f1",
    padding: "10px",
    borderRadius: "6px",
    marginTop: "8px",
    fontSize: "14px"
  }
};

export default App;
