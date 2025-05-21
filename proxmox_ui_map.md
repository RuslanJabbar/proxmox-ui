# Proxmox VE Web UI Feature Map (Version 8.4.1)

This document outlines the distinct views, panels, dialogs, tabs, and menus available in the Proxmox VE web UI, based on the official documentation.

## Global UI Elements

### Header
*   **Purpose**: Provides top-level status information and quick access to common actions.
*   **Functionalities**:
    *   **Proxmox Logo & Version**: Displays the Proxmox logo and current PVE version.
    *   **Search Bar**: Allows quick searching for VMs, containers, nodes, storage, etc.
    *   **Documentation Button**: Opens the official Proxmox VE documentation.
    *   **Create VM Button**: Opens the virtual machine creation wizard.
    *   **Create CT Button**: Opens the container creation wizard.
    *   **User Menu**:
        *   **Purpose**: Displays the current user and provides access to user-specific settings.
        *   **Functionalities**:
            *   **My Settings**: Opens the "My Settings" dialog.
            *   **TFA (Two-Factor Authentication)**: Shortcut to TFA settings.
            *   **Password**: Shortcut to password self-service.
            *   **Language**: Option to change the UI language.
            *   **Color Theme**: Option to change the UI color theme.
            *   **Logout**: Logs out the current user.

### My Settings Dialog
*   **Purpose**: Allows users to configure local UI preferences.
*   **Functionalities**:
    *   **Dashboard Storages**: Enable or disable specific storages from being counted in the datacenter summary.
    *   **Stored User Name**: View and clear the saved username.
    *   **Reset Layout**: Resets all GUI layouts to their defaults.
    *   **xterm.js Settings**:
        *   **Font-Family**: Set the font for the xterm.js console.
        *   **Font-Size**: Set the font size for the xterm.js console.
        *   **Letter Spacing**: Adjust letter spacing in the xterm.js console.
        *   **Line Height**: Specify line height in the xterm.js console.

### Resource Tree
*   **Purpose**: Main navigation tree to select and manage different objects within Proxmox VE.
*   **View Types**:
    *   **Server View (Default)**: Shows all objects grouped by nodes (Datacenter, Node, Guest, Storage, Pool).
    *   **Folder View**: Shows all objects grouped by object type.
    *   **Pool View**: Shows VMs and containers grouped by pool.
    *   **Tag View**: Shows VMs and containers grouped by tags.
*   **Object Types**:
    *   Datacenter
    *   Node
    *   Guest (VMs, Containers, Templates)
    *   Storage
    *   Pool

### Log Panel
*   **Purpose**: Displays logs for recent tasks and cluster-wide messages.
*   **Functionalities**:
    *   Shows output from background tasks (e.g., VM creation).
    *   Double-click a task log entry to view details or abort a running task.
    *   Displays most recent tasks from all cluster nodes.
    *   Older/finished tasks are removed but accessible via Node panel -> Task History.
    *   **Cluster log panel**: Displays short-running action logs sent to all cluster members.

## Datacenter Level

*   **Purpose**: Access cluster-wide settings and information.
*   **Content Panels/Tabs**:
    *   **Search**:
        *   **Purpose**: Perform a cluster-wide search.
        *   **Functionalities**: Search for nodes, VMs, containers, storage devices, and pools.
    *   **Summary**:
        *   **Purpose**: Provides an overview of the cluster's health and resource usage.
    *   **Cluster**:
        *   **Purpose**: Manage cluster membership.
        *   **Functionalities**: Create or join a cluster.
    *   **Options**:
        *   **Purpose**: View and manage cluster-wide default settings.
        *   **Functionalities**:
            *   **User Tag Access**: Configure restrictions on user tag usage (free, list, existing, none).
            *   **Registered Tags**: Manage a list of tags that can only be added/removed by privileged users.
            *   **Tag Style Override**: Customize tag color, shape, case-sensitivity, and sorting.
            *   **Consent Text**: Configure a custom consent banner for login.
    *   **Storage**:
        *   **Purpose**: Manage cluster storage.
        *   **Functionalities**: Add, edit, remove storage; view storage status and details.
    *   **Backup**:
        *   **Purpose**: Schedule cluster-wide backup jobs.
        *   **Functionalities**: Define backup schedules for VMs/containers across the cluster.
    *   **Replication**:
        *   **Purpose**: View and manage replication jobs for data redundancy.
    *   **Permissions**:
        *   **Purpose**: Manage access control.
        *   **Functionalities**: Manage users, groups, API tokens, roles, and authentication realms (LDAP, MS-AD, Two-Factor).
    *   **HA (High Availability)**:
        *   **Purpose**: Manage Proxmox VE High Availability settings for guests.
    *   **ACME**:
        *   **Purpose**: Set up and manage ACME (Let's Encrypt) certificates for server nodes.
    *   **Firewall**:
        *   **Purpose**: Configure cluster-wide firewall rules and templates.
    *   **Metric Server**:
        *   **Purpose**: Define external metric servers for Proxmox VE monitoring.
    *   **Notifications**:
        *   **Purpose**: Configure notification behavior and targets (e.g., email).
    *   **Support**:
        *   **Purpose**: Display information about support subscriptions.

## Node Level

*   **Purpose**: Manage individual nodes within the cluster.
*   **Header Buttons**:
    *   **Reboot**: Reboot the node.
    *   **Shutdown**: Shutdown the node.
    *   **Shell**: Access node shell (options: noVNC, SPICE, xterm.js).
    *   **Bulk Actions**:
        *   **Bulk Start**: Start multiple selected guests.
        *   **Bulk Shutdown**: Shutdown multiple selected guests.
        *   **Bulk Migrate**: Migrate multiple selected guests.
    *   **Help**: Access help documentation.
*   **Content Panels/Tabs**:
    *   **Search**:
        *   **Purpose**: Search for VMs, containers, storage devices, and pools within the selected node.
    *   **Summary**:
        *   **Purpose**: Display an overview of the node's resource usage (CPU, memory, disk).
    *   **Notes**:
        *   **Purpose**: Write custom comments in Markdown syntax for the node.
    *   **Shell**:
        *   **Purpose**: Access a shell interface for the node.
    *   **System**:
        *   **Purpose**: Configure node-specific system settings.
        *   **Functionalities**: Manage network configuration, DNS, time settings, and access syslog.
    *   **Updates**:
        *   **Purpose**: Manage system updates.
        *   **Functionalities**: Upgrade the system, view available packages.
    *   **Firewall**:
        *   **Purpose**: Manage Proxmox Firewall settings for the specific node.
    *   **Disks**:
        *   **Purpose**: Overview and management of attached disks.
        *   **Functionalities**: View disk status, manage disk usage (e.g., LVM, ZFS).
    *   **Ceph**: (Only if Ceph server is installed on the host)
        *   **Purpose**: Manage Ceph distributed storage cluster.
        *   **Functionalities**: View Ceph status, manage OSDs, pools, etc.
    *   **Replication**:
        *   **Purpose**: View and manage replication jobs specific to this node.
    *   **Task History**:
        *   **Purpose**: View a list of past tasks executed on this node.
    *   **Subscription**:
        *   **Purpose**: Manage Proxmox VE subscription.
        *   **Functionalities**: Upload subscription key, generate system report for support.

## Guest Level (VMs and LXC Containers)

*   **Purpose**: Manage individual Virtual Machines (KVM) and Linux Containers (LXC).
*   **Header Buttons/Menus**:
    *   **Power Management (e.g., Start, Shutdown, Stop, Reset, Pause, Hibernate)**: Control guest power state.
    *   **Migrate**: Migrate guest to another node.
    *   **Console**: Access guest console (options: SPICE, noVNC, xterm.js).
    *   **Clone**: Create a clone of the guest.
    *   **HA**: Manage High Availability settings for the guest.
    *   **Help**: Access help documentation.
    *   **Tags**:
        *   **Purpose**: Add, edit, or remove informational tags for guests.
        *   **Functionalities**: Click pencil icon to edit tags; `+` to add, `-` to remove; `✓` to save, `x` to cancel. Tags are displayed in Resource Tree and guest status line.
*   **Content Panels/Tabs**:
    *   **Summary**:
        *   **Purpose**: Provides an overview of the guest's activity and configuration.
        *   **Functionalities**: View status, resource usage, and a "Notes" field for Markdown comments.
    *   **Console**:
        *   **Purpose**: Access an interactive console for the guest.
    *   **(KVM) Hardware**:
        *   **Purpose**: Define and manage virtual hardware for KVM VMs.
        *   **Functionalities**: Add/remove/configure virtual CPUs, memory, disks, network interfaces, CD/DVD drives, USB devices, etc.
    *   **(LXC) Resources**:
        *   **Purpose**: Define system resources available to the LXC container.
        *   **Functionalities**: Configure memory, CPU limits, root disk size, etc.
    *   **(LXC) Network**:
        *   **Purpose**: Configure network settings for the LXC container.
    *   **(LXC) DNS**:
        *   **Purpose**: Configure DNS settings for the LXC container.
    *   **Options**:
        *   **Purpose**: Manage various guest-specific options.
        *   **Functionalities**: Boot order, startup/shutdown behavior, spice enhancements, KVM settings (e.g., BIOS, machine type), LXC settings (e.g., unprivileged container, features).
    *   **Task History**:
        *   **Purpose**: View all previous tasks related to the selected guest.
    *   **(KVM) Monitor**:
        *   **Purpose**: Access the QEMU/KVM monitor for advanced interaction with the KVM process.
    *   **Backup**:
        *   **Purpose**: Create and restore backups for the guest.
        *   **Functionalities**: Schedule backups, restore from backups.
    *   **Replication**:
        *   **Purpose**: View and manage replication jobs for the selected guest.
    *   **Snapshots**:
        *   **Purpose**: Create and restore VM snapshots (for KVM) or container snapshots (for LXC if supported by storage).
    *   **Firewall**:
        *   **Purpose**: Configure firewall rules at the guest level.
    *   **Permissions**:
        *   **Purpose**: Manage user permissions for the selected guest.

## Storage Level

*   **Purpose**: Manage storage repositories used by Proxmox VE.
*   **View Structure**: Two-partition split-view. Left: storage options. Right: content of selected option.
*   **Content Panels/Tabs**:
    *   **Summary**:
        *   **Purpose**: Shows important information about the storage.
        *   **Functionalities**: Displays type, usage, content types it stores (e.g., ISO images, container templates, VM disks, backups).
    *   **Content (dynamically named, e.g., "ISO Images", "Backups", "CT Templates")**:
        *   **Purpose**: View and manage specific content types stored on the storage.
        *   **Functionalities**: Upload, download, delete content.
    *   **Permissions**:
        *   **Purpose**: Manage user permissions for the storage.

## Pools Level

*   **Purpose**: Group guests and storage for simplified management.
*   **View Structure**: Two-partition split-view. Left: pool options. Right: content of selected option.
*   **Content Panels/Tabs**:
    *   **Summary**:
        *   **Purpose**: Shows a description of the pool.
    *   **Members**:
        *   **Purpose**: Display and manage pool members.
        *   **Functionalities**: Add/remove guests and storage to/from the pool.
    *   **Permissions**:
        *   **Purpose**: Manage user permissions for the pool.

## General Dialogs/Wizards (accessible from multiple locations)

*   **Create VM Wizard**:
    *   **Purpose**: Guides through the process of creating a new KVM virtual machine.
    *   **Steps/Tabs**: General, OS, System, Disks, CPU, Memory, Network, Confirm.
*   **Create CT Wizard**:
    *   **Purpose**: Guides through the process of creating a new LXC container.
    *   **Steps/Tabs**: General, Template, Root Disk, CPU, Memory, Network, DNS, Confirm.
*   **Task Viewer Dialog**:
    *   **Purpose**: Displays detailed log output for a specific task.
    *   **Functionalities**: Shows real-time log, task status, option to abort running task. Accessed by double-clicking a task in the Log Panel or Task History.
*   **Confirmation Dialogs**:
    *   **Purpose**: Prompts user for confirmation before executing potentially destructive actions (e.g., delete VM, stop node).
*   **Edit Dialogs**:
    *   **Purpose**: Various dialogs for editing settings of different objects (e.g., storage configuration, network interface settings, user properties).
    *   **Example**: "Edit Storage" dialog, "Edit Network Interface" dialog.

This map provides a comprehensive overview of the Proxmox VE web UI components and their primary functions.
The exact options and layout might have minor variations based on specific configurations and installed plugins.
Refer to the official Proxmox VE documentation for the most detailed and up-to-date information.
