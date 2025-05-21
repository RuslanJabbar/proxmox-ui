# Proxmox VE - New UI Design Proposal (Textual Wireframes) - V2

This document outlines a proposal for a redesigned Proxmox VE web interface, drawing inspiration from modern dashboard-centric UIs like Apache CloudStack while ensuring all existing Proxmox VE functionalities are retained and intuitively accessible. This version adds more detail to specific views and interactions.

## 1. Core Design Philosophy & Overall Layout

*   **Dashboard-Centric Approach**: The primary landing page will be a comprehensive dashboard providing an at-a-glance overview of the cluster.
*   **Modern Aesthetics**: Clean, spacious design with modern iconography and typography.
*   **Persistent Collapsible Sidebar Navigation**: A left sidebar will be the main navigation hub. The resource tree itself will be integrated into this sidebar as a key navigation method.
*   **Global Header**: Contains global search, user settings, notifications, and potentially a role-based view simplifier.
*   **Contextual Views & Dashboards**: Detailed information and actions will be presented in dedicated views or dashboards for selected resources (Datacenter, Node, Guest, Storage, Pool).
*   **Accessibility & Responsiveness**: Design should aim for improved accessibility and a more responsive layout for various screen sizes.

## 2. Main Navigation Structure

### A. Global Header (Top Bar)
*   **Left**: Proxmox VE Logo.
*   **Center**:
    *   **Global Search Bar**: "Search for VMs, CTs, Nodes, Storage, IP Addresses, Logs..." (searches across all resource types and potentially task logs).
*   **Right**:
    *   **Notifications Icon**: Indicates recent alerts or important events (e.g., HA failover, backup failure, critical system errors). Clicking opens a dropdown with recent critical notifications and a link to the full "Datacenter -> Notifications" view or a filtered "Event Log" view.
    *   **Task Queue Icon/Indicator**: Shows number of active/recent tasks. Clicking opens a compact dropdown of the last 5-10 tasks with status (running, success, failed), target, and a link to the full "Task Log Viewer."
    *   **User Menu (Username Dropdown)**:
        *   **Current User**: [Username]@[Realm]
        *   **My Settings**:
            *   UI Theme (Light/Dark/System default)
            *   Language Selection
            *   Console Preferences (xterm.js font, size, letter spacing, line height)
            *   Dashboard Storages (Select which storages contribute to dashboard summaries - current functionality)
            *   Stored User Name (View/Clear)
            *   Reset Layouts (Reset all UI customizations to default)
        *   **API Token Management**: Link to "Datacenter -> Permissions -> API Tokens" for the current user or all if admin.
        *   **Two-Factor Authentication**: Setup/manage TFA for the current user.
        *   **Change Password**
        *   **Documentation Link**: Opens official Proxmox VE documentation in a new tab.
        *   **Logout**
    *   **(Optional) View Mode Toggle**: "Admin View" / "Simplified View". If implemented, this would tailor UI complexity based on user roles/permissions, hiding advanced sections for users with limited rights. Default to "Admin View" for backward compatibility.

### B. Collapsible Sidebar (Left)
*   **Collapsible**: Can be pinned open (showing icons and text) or collapsed (showing icons only). Default state can be user-configurable.
*   **Sections (Top-Level Menu Items)**:
    1.  **Dashboard**: Links to the main cluster dashboard (landing page).
    2.  **Resource Tree**:
        *   **Purpose**: Retains the familiar hierarchical navigation of Proxmox VE. This is a primary method of navigation.
        *   **Integration**: Displayed as a scrollable, expandable tree directly within the sidebar. This is *not* a sub-item but a core part of the sidebar itself.
        *   **Functionality**:
            *   Top Level: "Datacenter" (represents the entire cluster).
            *   Second Level: Nodes, Storage Pools, Resource Pools (if any are defined).
            *   Third Level (under Nodes): Guest VMs/CTs, specific node-level storage, network interfaces, etc.
            *   Third Level (under Storage Pools): Individual storage definitions.
            *   Third Level (under Resource Pools): Members of the pool.
            *   **Interaction**: Clicking an item in the Resource Tree updates the main content area to display the relevant dashboard or detail view for that item (e.g., clicking "Datacenter" loads the Datacenter View, clicking a Node name loads the Node Dashboard, clicking a VM name loads the Guest Detail View). This ensures the tree remains a central and powerful navigation tool.
    3.  **Views (Contextual alternatives to Resource Tree selections)**:
        *   **Datacenter**: Loads the "Datacenter View" in the main content area. This is equivalent to selecting "Datacenter" in the Resource Tree.
        *   **Nodes**: Loads a "Node Management View" (list of all nodes) in the main content area.
        *   **Guests (VMs & CTs)**: Loads the "Guest Management View" (list of all guests).
        *   **Storage**: Loads the "Storage Management View" (list of all storage pools).
        *   **Pools**: Loads a "Pool Management View" (list of all resource pools).
    4.  **Cluster Services**:
        *   **Backup**: Cluster-wide backup scheduling, status, and remote storage configuration.
        *   **Replication**: Cluster-wide replication job management.
        *   **HA (High Availability)**: Management of HA groups and resources.
        *   **Firewall**: Cluster-wide firewall configuration and templates.
        *   **Permissions**: User, Group, Role, API Token, Realm management.
    5.  **System & Logs**:
        *   **Task Log Viewer**: Full-page view for all cluster tasks with advanced filtering (by node, guest, task type, status, date range, user).
        *   **Notifications Log**: View historical notifications.
        *   **Syslog (Cluster-wide)**: Access to aggregated syslog if configured, or links to individual node syslogs.
    6.  **Help/Documentation**: Quick link to official documentation.

## 3. Main Dashboard Layout (Landing Page)

*   **Purpose**: Provide a high-level, aggregated overview of the entire cluster's status and quick access to common areas.
*   **Layout**: A series of customizable widgets/cards.
*   **Key Sections/Widgets**:
    *   **Cluster Status & Vitals**: (As described in V1) - Links to "Datacenter View".
    *   **Resource Utilization Overview**: (As described in V1) - Links to relevant filtered views (e.g., top VMs link to Guest Management View filtered by those VMs).
    *   **Node Health Summary**: (As described in V1) - Clicking a node name navigates to its dedicated "Node Dashboard/Detail View". Link to the full "Nodes Management View".
    *   **Storage Pool Summary**: (As described in V1) - Links to "Storage Management View" or individual "Storage Detail View".
    *   **Recent Tasks & Events**: (As described in V1) - Links to full "Task Log Viewer" with appropriate filters.
    *   **Backup & Replication Overview**: (As described in V1) - Links to "Backup" and "Replication" sections under "Cluster Services".
    *   **Quick Actions**: (As described in V1) - Launch wizards or navigate to creation forms.

## 4. Datacenter View

*   **Access**: Via sidebar "Views -> Datacenter" link or by selecting "Datacenter" at the root of the Resource Tree.
*   **Purpose**: To manage and view all cluster-wide settings and information, analogous to the current "Datacenter" level in Proxmox VE.
*   **Layout**:
    *   **Header**: Title "Datacenter Management".
    *   **Sub-Navigation (Tabs or Secondary Vertical Nav within this view)**:
        *   **Summary**: Cluster health, resource overview (can be similar to main dashboard but specific to overall datacenter status), cluster notes (Markdown enabled).
        *   **Cluster**: Manage cluster membership (create/join, node status within cluster).
        *   **Options**: Cluster-wide default settings (keyboard layout, console settings, MAC prefix, User Tag Access, Registered Tags, Consent Text, etc.).
        *   **Storage**: View/Add/Edit/Remove cluster-wide storage (this is a view of *all* storage, distinct from the "Storage Management View" which lists individual storages for detailed drill-down). This section would list all storage available to the datacenter and allow high-level actions.
        *   **Backup (Defaults/Schedules)**: Configure default backup settings, view all backup jobs.
        *   **Replication (Defaults/Schedules)**: Configure default replication settings, view all replication jobs.
        *   **Permissions**: Manage Users, Groups, Roles, API Tokens, Realms.
        *   **HA (High Availability)**: Global HA settings, view HA resources and groups.
        *   **Firewall**: Cluster-wide firewall rules, security groups, aliases, IP sets.
        *   **ACME**: Manage Let's Encrypt certificates for nodes.
        *   **Metric Server**: Define external metric servers.
        *   **Notifications**: Configure notification behavior and targets.
        *   **Tags**: Manage Tag Style Overrides and Registered Tags.
        *   **Support**: Subscription information.
*   **Proxmox Functionality Retention**: All items currently under the "Datacenter" level in the Proxmox VE tree are represented here as sub-sections. The Resource Tree interaction remains key: selecting "Datacenter" in the tree loads this view.

## 5. Node Dashboard/Detail View

*   **Access**: By clicking a node in the "Node Health Summary" on the main dashboard, from the "Nodes Management View," or by selecting a specific node in the Resource Tree.
*   **Purpose**: To view detailed information and manage a specific node.
*   **Layout**:
    *   **Header**: Node Name, Status (Online/Offline/Maintenance), Power actions (Reboot, Shutdown, Shell dropdown - noVNC, SPICE, xterm.js). Breadcrumb navigation.
    *   **Sub-Navigation (Tabs or Secondary Vertical Nav)**:
        *   **Summary**: Current "Summary" tab (resource usage graphs for CPU, Memory, Network, IO delay for this node), hardware information, notes (Markdown enabled).
        *   **Shell**: Access to the node's command-line shell.
        *   **System**: Network config, DNS, Time, Services, Syslog for this node, Updates (view/run updates).
        *   **Disks**: Overview of attached physical disks, management of LVM, ZFS, directories, etc., on this node.
        *   **Ceph**: (If Ceph is installed/configured for this node) Ceph status, OSD management, etc.
        *   **Firewall**: Node-specific firewall rules.
        *   **Replication**: View/manage replication jobs specific to this node.
        *   **Task History**: Log of tasks performed on or by this node.
        *   **Subscription**: Manage subscription key for this node.
        *   **Guests**: A filtered list of VMs and CTs running on this specific node. Clicking a guest navigates to its "Guest Detail View."
*   **Proxmox Functionality Retention**: All current node-level tabs and actions are mapped here. The Resource Tree allows direct navigation to this view by selecting a node. Bulk actions like Bulk Start/Shutdown/Migrate for guests on this node could be available in the "Guests" sub-tab.

## 6. Redesigned 'Guest Management' View (VMs & CTs)

*   (As described in V1 - no major changes, already quite detailed)
*   **Refinement**: The "Guest Detail View" header could also include quick access to "Migrate," "Clone," and "Delete" for the currently viewed guest.

## 7. Redesigned 'Storage Management' View

*   (As described in V1 - no major changes, already quite detailed)
*   **Refinement**: The "Storage Detail View" header could include "Edit" and "Remove" buttons for the currently viewed storage. The "Content Tabs" should clearly indicate the path/pool for the storage being viewed.

## 8. General Proxmox Functionality Integration & Resource Tree Interaction

*   **Resource Tree as Primary Navigation**: The Resource Tree in the sidebar is not just an alternative but a primary way to navigate. Selecting any item (Datacenter, Node, VM/CT, Storage Pool, Resource Pool) in the tree will directly load its corresponding detailed view or dashboard in the main content area.
    *   Example: Clicking "Datacenter" in the tree loads the "Datacenter View."
    *   Example: Clicking a specific node "pve-01" in the tree loads the "Node Dashboard/Detail View" for "pve-01."
    *   Example: Clicking a VM "webserver-01" under "pve-01" in the tree loads the "Guest Detail View" for "webserver-01."
    *   Example: Clicking a storage pool "local-lvm" in the tree loads the "Storage Detail View" for "local-lvm."
*   **Contextual Menus in Resource Tree**: Right-clicking items in the Resource Tree should provide context-sensitive actions (e.g., right-click VM -> Start, Stop, Console, Migrate, Clone; right-click Node -> Shell, Reboot, Shutdown). This is a key Proxmox feature to retain.
*   **Detailed Task Logs**: The full "Task Log Viewer" is accessible from the sidebar. The current bottom log panel will be replaced by the "Task Queue Icon/Indicator" in the header, providing a less intrusive way to monitor recent tasks. Double-clicking a task in the dropdown or in any filtered task list (e.g., in Guest Detail View) should open the full log for that specific task in a modal or a dedicated panel.
*   **Wizards**: Creation wizards (VM, CT, Storage, Pool, Backup Job, etc.) will be launched from buttons in relevant views (e.g., "+ Create VM" in Guest Management View) or from Quick Actions on the main dashboard. They should be visually modernized.
*   **Drag and Drop**: If feasible, retain/enhance drag-and-drop functionality within the Resource Tree (e.g., migrating a VM to a different node, adding guests to pools).

This refined proposal aims to provide a more modern, dashboard-oriented UI while ensuring that the power, detail, and familiar navigation patterns (especially the Resource Tree) of Proxmox VE are preserved and enhanced.I have reviewed all the markdown files: `proxmox_ui_map.md`, `cloudstack_ui_ux_analysis.md`, `ui_comparison_analysis.md`, and the latest version of `proxmox_new_ui_wireframes_desc.md`.

The current version of `proxmox_new_ui_wireframes_desc.md` (Version 2) is comprehensive and addresses the core requirements of proposing a new UI layout for Proxmox VE, detailing the main dashboard, VM management, and storage management views, while also considering how existing Proxmox functionalities would be integrated. It incorporates feedback and adds more detail to the User Menu, Node Dashboard, Datacenter View, and Resource Tree interaction.

No further actions are needed from me for this subtask. The generated document provides a solid textual foundation for UI/UX designers.
