module MyModule::TokenVault {

    use aptos_framework::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::AptosCoin;

    /// A struct to store the deposited tokens
    struct Vault has store, key {
        coins: coin::Coin<AptosCoin>,
    }

    /// Create a vault and deposit tokens into it
    public fun deposit_tokens(user: &signer, amount: u64) acquires Vault {
        // Withdraw tokens from the user
        let deposit = coin::withdraw<AptosCoin>(user, amount);

        // If vault exists, merge coins; else create a new one
        if (exists<Vault>(signer::address_of(user))) {
            let vault = borrow_global_mut<Vault>(signer::address_of(user));
            coin::merge(&mut vault.coins, deposit);
        } else {
            move_to(user, Vault { coins: deposit });
        }
    }

    /// Withdraw tokens from the vault
    public fun withdraw_tokens(user: &signer, amount: u64) acquires Vault {
        let vault = borrow_global_mut<Vault>(signer::address_of(user));
        let coins = coin::extract(&mut vault.coins, amount);
        coin::deposit<AptosCoin>(signer::address_of(user), coins);
    }
}
