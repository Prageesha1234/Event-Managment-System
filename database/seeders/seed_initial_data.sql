INSERT INTO users (username, password, role) VALUES
('admin', 'admin_password', 'Admin'),
('event_manager', 'event_manager_password', 'Event Manager'),
('event_coordinator', 'event_coordinator_password', 'Event Coordinator'),
('event_team', 'event_team_password', 'Event Team'),
('vendor_coordinator', 'vendor_coordinator_password', 'Vendor Coordinator'),
('finance_manager', 'finance_manager_password', 'Finance Manager');

INSERT INTO events (name, date, location, description) VALUES
('Annual Company Meeting', '2023-12-01', 'Main Hall', 'Annual meeting to discuss company performance and future plans.'),
('Team Building Retreat', '2024-01-15', 'Lakeview Resort', 'A retreat for team building and relaxation.'),
('Product Launch', '2024-02-20', 'City Convention Center', 'Launch event for the new product line.');

INSERT INTO vendors (name, contact_info, service_type) VALUES
('Catering Co.', 'contact@cateringco.com', 'Catering'),
('AV Solutions', 'info@avsolutions.com', 'Audio/Visual Equipment'),
('Event Decorators', 'hello@eventdecorators.com', 'Event Decoration');

INSERT INTO finances (event_id, budget, expenses) VALUES
(1, 5000, 3000),
(2, 2000, 1500),
(3, 10000, 7000);