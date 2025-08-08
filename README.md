# AptosBootcamp

# 🪙 TokenVault Smart Contract

## 📜 Description
**TokenVault** is a simple Move-based Aptos smart contract that allows users to securely deposit and withdraw Aptos tokens (`AptosCoin`) into their personal on-chain vault.  
Each user owns a dedicated vault tied to their account address, ensuring complete control over their stored funds.  

The contract is lightweight with only **two core functions**:
- `deposit_tokens` → Add Aptos tokens to your vault.
- `withdraw_tokens` → Withdraw a specific amount of tokens from your vault back to your wallet.

---

## 🎯 Vision
Our vision is to provide a **secure, minimal, and efficient** on-chain vault system for Aptos token holders.  
We aim to make token storage and retrieval seamless while preserving transparency and ownership.  
This project serves as a foundation for more advanced token management systems on Aptos.

---

## 🚀 Future Scope
- **Multi-token support** → Extend vaults to store any fungible token type, not just `AptosCoin`.
- **Interest-bearing vaults** → Implement staking logic so deposits can earn rewards over time.
- **Access control** → Add delegated access so trusted addresses can manage vault funds.
- **Vault analytics** → Provide deposit/withdraw history with transaction metadata.
- **Integration with DApps** → Connect vaults to lending, trading, or gaming platforms.

---

## 📌 Contract Address
`0xYOUR_DEPLOYED_CONTRACT_ADDRESS`
Transaction submitted: https://explorer.aptoslabs.com/txn/0x1986fcc65a8ba1e31b152b41a51c4d6bc787f392869c75e282fb5c4614eb01ef?network=devnet
{
  "Result": {
    "transaction_hash": "0x1986fcc65a8ba1e31b152b41a51c4d6bc787f392869c75e282fb5c4614eb01ef",
    "gas_used": 82,
    "gas_unit_price": 100,
    "sender": "7613446b9780d4c96ac64b8e3bb145ac78df09080f56482d19a02bd87e4d7a43",
    "sequence_number": 1,
    "replay_protector": {
      "SequenceNumber": 1
    },
    "success": true,
    "timestamp_us": 1754653214909305,
    "version": 28559420,
    "vm_status": "Executed successfully"
  }
}

## 📷 Deployment Screenshot
![Deployment Screenshot](Screenshot%202025-08-08%20171120.png)


---





